<template>
  <Layout>
    <section class="container-inner mx-auto py-16">
      <h1>Blog</h1>
      <p>Listing page for blog articles.</p>

      <div
        v-for="post in $page.posts.edges"
        :key="post.id"
        class="post border-gray-400 border-b mb-12"
      >
        <h2 class="text-3xl font-bold">
          <g-link :to="post.node.path" class="text-copy-primary">{{ post.node.title }}</g-link>
        </h2>
        <div class="text-copy-secondary mb-4">
          <span>{{ post.node.date }}</span>
          <span>&middot;</span>
          <span>{{ post.node.timeToRead }} min read</span>
        </div>

        <div class="text-lg mb-4">{{ post.node.summary }}</div>

        <div class="mb-8">
          <g-link :to="post.node.path" class="font-bold uppercase">Read More</g-link>
        </div>
      </div>
      <!-- end post -->

      <pagination-posts
        v-if="$page.posts.pageInfo.totalPages > 1"
        base="/blog"
        :totalPages="$page.posts.pageInfo.totalPages"
        :currentPage="$page.posts.pageInfo.currentPage"
      />
    </section>
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 4, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "D MMM YYYY")
        summary
        timeToRead
        path
      }
    }
  }
}
</page-query>

<script>
import PaginationPosts from "../components/PaginationPosts";

export default {
  metaInfo: {
    title: "Blog"
  },
  components: {
    PaginationPosts
  }
};
</script>

