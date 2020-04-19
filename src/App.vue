<template>
  <div id="app">
    <router-view />
    <div ref="load">loading...</div>
  </div>
</template>

<script>
import 'intersection-observer'

export default {
  name: 'App',
  mounted() {
    this.initIntersectionObserver()
  },
  methods: {
    initIntersectionObserver () {
      const io = new IntersectionObserver((entries, observer) => {
        console.log(entries, observer)
      })
      
      io.observe(this.$refs.load)
    },
  }
}
</script>

<style lang="scss" scoped>
#app {
  padding: 10px;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
