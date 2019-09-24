<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <h1 class="text-4xl font-bold leading-tight">{{ $page.documentation.title }}</h1>
      <div class="markdown-body">
        <VueRemarkContent />
      </div>
    </div>
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Documentation ($id: ID!) {
  documentation(id: $id) {
    title
    excerpt
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.documentation.title
    }
  }
}
</script>

<style src="../css/github-markdown.css" />
