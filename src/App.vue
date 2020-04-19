<template>
  <div id="app">
    <router-view />
    <h1 ref="load">loading...</h1>
  </div>
</template>

<script>
import Constant from '@/Constant'
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
        this.$store.dispatch(Constant.Action.setPostCount, 8)
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
