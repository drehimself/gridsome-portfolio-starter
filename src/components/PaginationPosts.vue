<template>
  <div class="flex justify-between text-xl items-center">
    <g-link :to="previousPage" :class="{ 'text-gray-400 hover:text-gray-400 cursor-not-allowed': !showPreviousPage }">&larr; Prev</g-link>
    <div class="text-base">Page {{ currentPage }} of {{ totalPages }}</div>
    <g-link :to="nextPage" :class="{ 'text-gray-400 hover:text-gray-400 cursor-not-allowed': !showNextPage }">Next &rarr;</g-link>
  </div>
</template>

<script>
export default {
  props: ['base', 'totalPages', 'currentPage'],
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
  }
}
</script>
