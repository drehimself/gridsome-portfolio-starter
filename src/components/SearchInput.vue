<template>
  <div class="relative">
    <vue-fuse
      placeholder="Search"
      event-name="results"
      :default-all="false"
      @fuseInputChanged="inputChanged"
      :list="posts"
      :keys="['title','summary']"
      :distance="500"
      :threshold="0.5"
      :include-matches="true"
      :min-match-char-length="2"
      class="bg-background-form border border-gray-500 rounded-full px-4 pl-10 py-2 outline-none focus:border-green-500 w-80"
    />
    <div class="absolute top-0 ml-3" style="top:10px">
      <svg fill="currentColor" class="text-gray-500 h-5 w-5" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg>
    </div>
    <transition name="fade">
      <div v-if="query.length > 0" class="normal-case absolute border left-0 right-0 w-108 text-left mb-4 mt-2 rounded-lg shadow overflow-hidden z-10">
        <div class="flex flex-col">
          <a
            v-for="(post, index) in results"
            :key="index"
            :href="post.item.path"
            @click="reset"
            class="bg-background-form border-b border-gray-400 text-xl cursor-pointer p-4 search-hover"
          >
            {{ post.item.title }}

            <span class="block font-normal text-copy-primary text-sm my-1">{{ post.item.summary }}</span>
          </a>

          <div v-if="results.length === 0" class="bg-background-form font-normal w-full border-b cursor-pointer p-4">
            <p class="my-0">No results for '<strong>{{ query }}</strong>'</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  created() {
    axios('search.json').then(response => {
      this.posts = response.data
    })

    this.$on('results', results => {
      this.results = results
    })
  },
  data() {
    return {
      query: '',
      results: [],
      posts: [],
    }
  },
  methods: {
    inputChanged(payload) {
      this.query = payload
    },
    reset() {
      this.query = ''
    },
  }
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>

