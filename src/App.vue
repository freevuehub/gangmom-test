<template>
  <div id="app">
    <router-view />
    <h1 v-if="loadingView" ref="load">loading...</h1>
  </div>
</template>

<script>
import Constant from '@/Constant'
import 'intersection-observer'

export default {
  name: 'App',
  data() {
    return {
      loadingView: true,
    }
  },
  mounted() {
    this.initIntersectionObserver()
  },
  methods: {
    initIntersectionObserver () {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(async (entry) => {
          try {
            if (!entry.isIntersecting) {
              return;
            }

            await this.$store.dispatch(Constant.Action.setPostCount, 8)
          } catch {
            this.loadingView = false
          }
        });
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
