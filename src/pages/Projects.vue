<template>
  <Layout>
    <section class="container-inner mx-auto py-16">
      <h1>My Work</h1>
      <div
        v-for="project in $page.projects.edges"
        :key="project.id"
        class="post border-gray-400 border-b mb-12"
      >
        <g-link :to="project.node.path">
          <div class="flex projectItem bg-dark">
            <div class="projectInfo">
              <h2 class="text-3xl font-bold text-copy-primary">{{ project.node.title }}</h2>
              <h4 class="projectRole">{{ project.node.role }}</h4>
              <p class="projDesc text-lg mb-4">{{ project.node.excerpt }}</p>
              <g-link
                :to="project.node.path"
                class="btn font-bold uppercase"
              >{{ project.node.lprojectName }}</g-link>
            </div>
            <div class="projectImg">
              <img :src="project.node.listingImage" :alt="project.node.listingImageAlt" />
            </div>
          </div>
        </g-link>
      </div>
      <!-- end post -->
    </section>
  </Layout>
</template>

<page-query>
  query Projects {
    projects: allProject (sortBy: "sortOrder", order: ASC) {
      edges {
        node {
          id
          path
          title
          role
          year
          excerpt
          projectName
          listingImage
          listingImageAlt
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: "projects"
  }
};
</script>

