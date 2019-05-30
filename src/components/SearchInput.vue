<template>
  <div class="relative">
    <input
      type="text"
      class="bg-background-form border border-gray-500 rounded-full px-4 pl-10 py-2 outline-none focus:border-green-500 w-80"
      v-model="query"
      @keyup="performSearch"
      @keyup.esc="reset"
    >
    <div class="absolute top-0 ml-3" style="top:10px">
      <svg fill="currentColor" class="text-gray-500 h-5 w-5" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg>
    </div>
    <div
      v-if="query.length > 0"
      class="absolute top-0 right-0 text-2xl mr-3 cursor-pointer text-gray-600 hover:text-gray-800"
      style="top:2px"
      @click="reset"
    >
      &times;
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
  },
  data() {
    return {
      query: '',
      results: [],
      posts: [],
      options: {
        shouldSort: true,
        includeMatches: true,
        threshold: 0.5,
        location: 0,
        distance: 500,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ['title', 'summary']
      }
    }
  },
  methods: {
    reset() {
      this.query = ''
    },
    performSearch() {
      this.$search(this.query, this.posts, this.options).then(results => {
        this.results = results
      })
    }
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

