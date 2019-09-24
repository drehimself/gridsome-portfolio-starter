<template>
  <div class="flex items-center">
    <div>
      <button class="text-5xl w-16 bg-green-900 hover:bg-green-800 text-white rounded px-4 py-2" @click="decrement">-</button>
    </div>
    <span class="text-5xl w-32 text-center ml-8">{{ count }}</span>
    <button class="text-5xl w-16 bg-green-900 hover:bg-green-800 text-white rounded px-4 py-2 ml-8" @click="increment">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
}
</script>
