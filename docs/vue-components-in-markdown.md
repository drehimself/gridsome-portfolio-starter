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

I'm still having trouble getting syntax highlighting to work in a Vue Remark type (Documentation, in this case).

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

It works fine in [blog posts](/introduction-to-gridsome) (I'm using [this gridsome plugin for Shiki](https://gridsome.org/plugins/gridsome-plugin-remark-shiki)).

If you're reading this and you have it working, please [let me know](https://twitter.com/drehimself). Even better, [send me a PR on GitHub](https://github.com/drehimself/gridsome-portfolio-starter).

I haven't tried the [remark plugins](https://github.com/remarkjs/remark/blob/master/doc/plugins.md#list-of-plugins) but ideally, I'd like the syntax highlighting to work with the plugin I'm already using for Gridsome.
