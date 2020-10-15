<template>
  <Layout>
    <div class="container mx-auto my-16">
      <h1 class="text-4xl font-bold leading-tight">{{ $page.post.title }}</h1>
      <div class="text-xl text-gray-600 mb-4">{{ $page.post.date }}</div>
      <div class="flex mb-8 text-sm">
        <g-link
          v-for="tag in $page.post.tags"
          :key="tag.id"
          :to="tag.path"
          class="bg-gray-300 rounded-full px-4 py-2 mr-4 hover:bg-green-300"
        >
          {{ tag.title }}
        </g-link>
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="markdown-body mb-8" v-html="$page.post.content" />
      <div class="mb-8">
        <g-link to="/blog" class="font-bold uppercase">Back to Blog</g-link>
      </div>
      <script type="application/javascript">
        talkyardServerUrl =
          "https://comments-for-kassymdorsel-com.talkyard.net";
      </script>
      <script
        type="application/javascript"
        src="https://c1.ty-cdn.net/-/talkyard-comments.min.js"
      ></script>
      <!-- You can specify a per page discussion id on the next line, if your URLs might change. -->
      <div class="talkyard-comments" style="margin-top: 45px">
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
import CommentBox from "../components/CommentBox";

export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<style src="../css/github-markdown.css" />
