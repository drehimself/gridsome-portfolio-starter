<template>
  <div class="commentbox" />
</template>

<script>
import commentBox from "commentbox.io";

export default {
  data() {
    return {
      removeCommentBox: null,
    };
  },
  mounted() {
    console.log(process.env.GRIDSOME_COMMENTBOX);
    this.removeCommentBox = commentBox(process.env.GRIDSOME_COMMENTBOX);
  },
  beforeDestroy() {
    this.removeCommentBox();
  },
};
</script>

<style scoped>
div {
  display: none;
}
</style>
