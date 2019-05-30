<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    const component = this
    this.handler = event => {
      component.$emit('keyup', event)
    }
    window.addEventListener('keyup', this.handler)
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.handler)
  }
}
</script>

<style scoped>
  div {
    display: none;
  }
</style>
