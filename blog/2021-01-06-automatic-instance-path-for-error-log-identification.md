---
title: Automatic Instance Path for Error and Log Identification
path: /automatic-instance-path-for-error-log-identification
date: 2021-01-06
summary: All POUs can have their device tree path automatically initialized into a variable. This can used as a unique string identification for the part of the code and can be used for easy identification of errors, logs, counters, etc.
tags: ['beckhoff', 'twincat', 'function', 'pou', 'software', 'logs']
---

> All POUs can have their device tree path automatically initialized into a variable. This can used as a unique string identification for the part of the code and can be used for easy identification of errors, logs, counters, etc.

### Introduction
When logging any information, be it to a database, file or just hmi, there needs to be an easy way to identify where it comes from. This can machine errors, counters, cycle time, anything. Every device, station, item needs its own unique id. This can be as simple as an integer, but that does not convey any extra useful information. Ideally the id would be able to convey the location or enough information to be able to easily find the physical associate device on a machine for easy trouble shooting.

Of course all of this can be manually hardcoded, for example using an integer device id to a location with a lookup table. Why do something manully when there are functions to automatically do it for us.

### Instance Path
Beckhoff offers a pragma that will initialize a string variable to its device tree path. This will be a unique string id and can also convey additional location information. Beckhoff documentation about [instance-path](https://infosys.beckhoff.com/english.php?content=../content/1033/tc3_plc_intro/2529681547.html&id=).

Let's create a base FB with this instance path. All of the code used in the project can extend this base FB and automatically have their instance path initilizated in the `_sid` variable. Short for String ID.

```typescript
{attribute 'reflection'}
FUNCTION_BLOCK FB_BaseDevice
VAR
    {attribute 'instance-path'}
    {attribute 'noinit'}
    _sid : STRING(255);
END_VAR
```

Create a project and define an instance.
```typescript
PROGRAM MAIN
VAR
	base : FB_BaseDevice;
END_VAR
```

After starting it all up looking at the `_sid` it is initilzed to `Project_Name.PLC_Name.MAIN.base`. We now have a unique id that can easily be used to identify what and where it is. When designing the PLC code layout it should match the physical makeup of the machine. That way all instance paths will perfectly match the physical machine layout.

### Real World Example
Let's look at a more reasonable example.

```typescript
PROGRAM MAIN
VAR
	stn1 : FB_Station;
    stn2 : FB_Station;
    stn3 : FB_Station;
END_VAR

FUNCTION_BLOCK FB_Station EXTENDS FB_BaseDevice
VAR
    cylinder : FB_Pneumatic // Also extends FB_BaseDevice;
END_VAR
```

This would give the following instance paths `_sid`.

| POU | _sid |
| --- | ---- |
| stn1 | Project_Name.PLC_Name.MAIN.stn1 |
| stn2 | Project_Name.PLC_Name.MAIN.stn2 |
| stn3 | Project_Name.PLC_Name.MAIN.stn3 |
| stn1 cylinder | Project_Name.PLC_Name.MAIN.stn1.cylinder |
| stn2 cylinder | Project_Name.PLC_Name.MAIN.stn2.cylinder |
| stn3 cylinder | Project_Name.PLC_Name.MAIN.stn3.cylinder |

Now sending a log to the HMI from any of these and have it display information is much easier. I would even add a log method to `FB_BaseDevice` that would automatically use this `_sid`.

```typescript
{attribute 'reflection'}
FUNCTION_BLOCK FB_BaseDevice
VAR
    {attribute 'instance-path'}
    {attribute 'noinit'}
    _sid : STRING(255);
END_VAR

METHOD log : BOOL:
VAR_INPUT
    msg : STRING(255);
END_VAR

// Implementation
log := F_SendToHMI(_sid, msg);
```

This can now be used in `FB_Cylinder` to notify of a failed extension/retraction.
```typescript
IF failedToExtend THEN
    log('Failed to Extend');
END_IF
```

Even in `FB_Station` if it expects a part and the part sensor does not turn on.
```typescript
IF partExpected AND NOT partSensor THEN
    log('Part mismatch');
END_IF
```

This could then easily be displayed.

| Device | Message |
| ------ | ------- |
| Project_Name.PLC_Name.MAIN.stn1.cylinder | Failed to Extend |
| Project_Name.PLC_Name.MAIN.stn1 | Part mismatch |


### Cleaning Up
We now have automatic id for any POU in the PLC. However the `_sid` is verbose and repetitive. Sepcifically the `Project_Name.PLC_Name.` part. This will never change (unless you change the project or PLC name, which you probably shouldn't) and adds no value.

The `MAIN.` part of the `_sid` can be useful if more than one PLC Task is used. For example if a secondary faster PLC task was used it could show up as `MAIN_FAST.`.

It would be nice to automatically remove the project and plc name from the `_sid`. The project name is available in a global variable automatically defined by Beckhoff.

```typescript
FUNCTION F_RemoveProjectName : STRING(255)
VAR_INPUT
	path : STRING(255);
END_VAR

// Implementation
F_RemoveProjectName := DELETE(path, LEN(TwinCAT_SystemInfoVarList._AppInfo.ProjectName) + FIND(path, TwinCAT_SystemInfoVarList._AppInfo.ProjectName), 1);
F_RemoveProjectName := F_ToLCase(F_RemoveProjectName);
```

This function will remove everythin upto the task name from the instance path. This helps clean it and also makes it even less likely to reach the 255 string length limit. Now let's add it to the `FB_init` method of `FB_BaseDevice`. As this only needs to be computed once, this is the best place to put it.

```typescript
{attribute 'reflection'}
FUNCTION_BLOCK FB_BaseDevice
VAR
    {attribute 'instance-path'}
    {attribute 'noinit'}
    _sid : STRING(255);
    _id : WORD;
END_VAR

METHOD FB_init : BOOL
VAR_INPUT
	bInitRetains : BOOL; // if TRUE, the retain variables are initialized (warm start / cold start)
	bInCopyCode : BOOL;  // if TRUE, the instance afterwards gets moved into the copy code (online change)
END_VAR

// Implementation
_sid := F_RemoveProjectName(_sid);
_id := F_DATA_TO_CRC16_CCITT(ADR(_sid), TO_UDINT(len(_sid)), 0);
```

Going back to the example the `_sid` will now be much shorter and cleaner.

| POU | _sid |
| --- | ---- |
| stn1 | MAIN.stn1 |
| stn2 | MAIN.stn2 |
| stn3 | MAIN.stn3 |
| stn1 cylinder | MAIN.stn1.cylinder |
| stn2 cylinder | MAIN.stn2.cylinder |
| stn3 cylinder | MAIN.stn3.cylinder |

Looking closely notice the `_id` variable. In your project sometimes a string based id will not work for you and an integer is needed. In `FB_init` set the `_id` to a unique integer based on the string using the [F_DATA_TO_CRC16_CCITT](https://infosys.beckhoff.com/english.php?content=../content/1033/tcplclib_tc2_utilities/35114507.html&id=) function.

> Using a hashing algorithm comes with the chance of collision where the `_id` for two or more `_sid` will be the same. Albeit a [very small](https://stackoverflow.com/questions/13998960/what-is-the-possibility-of-crc16-collisions-on-20-bytes-of-data) chance this needs to be taken into account if used and verified. 

### Conclusion
There is no need to hard code a description string or id for all the different POUs in a project. Use the tools from Beckhoff and have it done automatically. Using OO principles makes implementing this easy by using a base FB with this already implemented. Ideally, even if it's empty, all FBs should extend a base class. This makes any future modifications fast and easy.

This can be used as the basis for creating a global string based counter for any device. See how using a [persistent hash table](/persistent-hash-table/).
