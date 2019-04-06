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
    </div>

  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost (sortBy: "date", order: DESC) {
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
  }
}
</script>

