<template>
  <Layout>
    <div class="container mx-auto my-16">
      <h1 class="text-4xl font-bold leading-tight">{{ $page.post.title }}</h1>
      <div class="text-xl text-gray-600 mb-3">{{ $page.post.date }}</div>
      <div class="flex flex-wrap text-xs">
        <g-link
          v-for="tag in $page.post.tags"
          :key="tag.id"
          :to="tag.path"
          class="bg-gray-300 rounded-full px-4 py-2 mr-2 mb-2 hover:bg-green-300"
        >
          {{ tag.title }}
        </g-link>
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="markdown-body mb-8" v-html="$page.post.content" />
      <div class="mb-8">
        <g-link to="/blog" class="font-bold uppercase">Back to Blog</g-link>
      </div>
      <div class="mt-5 talkyard-comments" data-discussion-id="">
        <noscript>Please enable Javascript to view comments.</noscript>
        <p class="mt-5 text-sm">
          Comments powered by
          <a target="_blank" rel="noopener" href="https://www.talkyard.io"
            >Talkyard</a
          >.
        </p>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post($path: String!) {
  post: post(path: $path) {
    title
    date(format: "MMMM D, Y")
    content
    tags {
      title
      path
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
  mounted() {
    let externalScript = document.createElement("script");
    externalScript.setAttribute("type", "application/javascript");
    externalScript.setAttribute(
      "src",
      "https://comments-for-kassymdorsel-com.talkyard.net/-/talkyard-comments.min.js"
    );
    document.head.appendChild(externalScript);
  },
};
</script>

<style src="../css/github-markdown.css" />
