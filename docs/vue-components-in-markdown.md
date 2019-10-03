---
title: Vue Components in Markdown
excerpt: An example markdown page that has Vue Components inside of it!
---
import TestComponent from '~/components/CounterComponent.vue'
import TransitionComponent from '~/components/TransitionComponent.vue'

Below is a Vue Component from `~/components/CounterComponent.vue`:

<test-component />

<hr>

Here is another component from `~/components/TransitionComponent.vue`:

<transition-component />

<hr>

The ability to use Vue Components in Markdown was added in Gridsome v0.7 with the [vue-remark](https://gridsome.org/plugins/@gridsome/vue-remark) plugin.

```js
<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <h1 class="text-4xl font-bold leading-tight">{{ $page.post.title }}</h1>
      <div class="text-xl text-gray-600 mb-8">{{ $page.post.date }}</div>
      <div class="markdown-body" v-html="$page.post.content" />
    </div>
  </Layout>
</template>
```

```css
.test {
  background: white;
  color: red;
}
```
