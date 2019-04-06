<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <div v-for="post in $page.posts.edges" :key="post.id" class="post border-gray-400 border-b mb-12">
        <h2 class="text-3xl font-bold"><g-link :to="post.node.path" class="text-gray-800">{{ post.node.title }}</g-link></h2>
        <div class="text-gray-700 mb-4">
          <span>{{ post.node.date }}</span>
          <span> &middot; </span>
          <span>{{ post.node.readTime }} min read</span>
        </div>

        <div class="text-lg mb-4">
          {{ post.node.summary }}
        </div>

        <div class="mb-8">
          <g-link :to="post.node.path" class="font-bold uppercase">Read More</g-link>
        </div>
      </div> <!-- end post -->

      <div v-if="$page.posts.pageInfo.totalPages > 1" class="flex justify-between text-xl items-center">
        <g-link :to="previousPage" :class="{ 'text-gray-400 hover:text-gray-400 cursor-not-allowed': !showPreviousPage }">&larr; Prev</g-link>
        <div class="text-base">Page {{ $page.posts.pageInfo.currentPage }} of {{ $page.posts.pageInfo.totalPages }}</div>
        <g-link :to="nextPage" :class="{ 'text-gray-400 hover:text-gray-400 cursor-not-allowed': !showNextPage }">Next &rarr;</g-link>
      </div>
    </div>

  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 3, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "MMMM D, Y")
        summary
        readTime
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Home'
  },
  computed: {
    showPreviousPage() {
      return this.$page.posts.pageInfo.currentPage !== 1
    },
    previousPage() {
      return [0, 1].includes(this.$page.posts.pageInfo.currentPage - 1)
        ? this.base
        : `${this.base}/${this.$page.posts.pageInfo.currentPage - 1}`;
    },
    showNextPage() {
      return this.$page.posts.pageInfo.currentPage !== this.$page.posts.pageInfo.totalPages
    },
    nextPage(currentPage, totalPages) {
      return this.$page.posts.pageInfo.totalPages > this.$page.posts.pageInfo.currentPage
        ? `${this.base}/${this.$page.posts.pageInfo.currentPage + 1}`
        : `${this.base}/${this.$page.posts.pageInfo.currentPage}`;
    }
  },
  data() {
    return {
      base: '/blog'
    }
  }
}
</script>

