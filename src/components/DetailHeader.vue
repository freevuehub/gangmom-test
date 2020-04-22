<template>
  <div class="detail-header">
    <button @click.prevent="onGoBack">&lt;</button>
  </div>
</template>

<script>
export default {
  methods: {
    onGoBack() {
      this.$router.back()
    },
  },
}
</script>

<style lang="scss">
.detail-header {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background-color: #d3121a;
  height: 40px;
  padding: 5px;
  button {
    font-size: 1.3rem;
    color: #fff;
    cursor: pointer;
  }
}
</style>
