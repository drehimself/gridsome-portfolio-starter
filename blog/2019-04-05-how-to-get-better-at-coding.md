---
title: How to Get Better At Coding
path: how-to-get-better-at-coding
date: 2019-04-05
summary: Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rerum earum quos explicabo suscipit maxime iste qui nihil. Reiciendis asperiores minus necessitatibus
tags: ['coding', 'frontend', 'backend']
---

![background](./images/blog_bg_2.jpg)

Lorem ipsum dolor sit amet, [consectetur adipisicing](https://google.ca) elit. Praesentium inventore hic possimus, cum nesciunt ea debitis, tempora officia perferendis vero ratione nam laudantium aliquid voluptatem velit? Open `/src/layouts.vue` and then edit the `main.css` file.

> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rerum earum quos explicabo suscipit maxime iste qui nihil `layout.vue` and then edit the `main.scss` file.

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

Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rerum earum quos explicabo suscipit. Praesentium inventore hic possimus, cum nesciunt ea debitis, tempora officia perferendis vero ratione nam laudantium aliquid voluptatem velit? Open `/src/layouts.vue` and then edit the `main.css` file.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rerum earum quos explicabo suscipit. Praesentium inventore hic possimus, cum nesciunt ea debitis, tempora officia perferendis vero ratione nam laudantium aliquid voluptatem velit? Open `/src/layouts.vue` and then edit the `main.css` file.

```js
<script>
export default {
  props: ['totalPages', 'currentPage'],
  computed: {
    showPreviousPage() {
      return this.currentPage !== 1
    },
    previousPage() {
      return [0, 1].includes(this.currentPage - 1)
        ? this.base
        : `${this.base}/${this.currentPage - 1}`;
    },
    showNextPage() {
      return this.currentPage !== this.totalPages
    },
    nextPage(currentPage, totalPages) {
      return this.totalPages > this.currentPage
        ? `${this.base}/${this.currentPage + 1}`
        : `${this.base}/${this.currentPage}`;
    }
  },
  data() {
    return {
      base: '/blog'
    }
  }
}
</script>
```

---

## Typography

Here is how some typography styles are rendered:

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

The quick brown fox jumps over the lazy dog

<s>The quick brown fox jumps over the lazy dog</s>

<u>The quick brown fox jumps over the lazy dog</u>

_The quick brown fox jumps over the lazy dog_

**The quick brown fox jumps over the lazy dog**

`The quick brown fox jumps over the lazy dog`

<small>The quick brown fox jumps over the lazy dog</small>

> The quick brown fox jumps over the lazy dog

[The quick brown fox jumps over the lazy dog](https://google.ca)

```php
<?php

class Foo extends bar
{
    public function fooBar()
    {
        //
    }
}
```

## Random Image

![mojave](./images/mojave-night.jpg)
