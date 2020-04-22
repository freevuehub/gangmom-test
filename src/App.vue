<template>
  <div id="app">
    <router-view />
    <loading class="load" v-if="loadingView" ref="load" />
  </div>
</template>

<script>
import Constant from '@/Constant'
import { Loading } from '@/components'
import 'intersection-observer' // IE 대응

export default {
  name: 'App',
  components: {
    Loading,
  },
  data() {
    return {
      loadingView: true,
    }
  },
  mounted() {
    this.initIntersectionObserver()
  },
  methods: {
    initIntersectionObserver() {
      const io = new IntersectionObserver(entries => {
        entries.forEach(async entry => {
          try {
            if (!entry.isIntersecting) {
              return
            }

            await this.$store.dispatch(
              Constant.Action.setPostCount,
              Number(this.$route.query.count || 8),
            )
          } catch {
            this.loadingView = false
          }
        })
      })

      io.observe(this.$refs.load.$el)
    },
  },
}
</script>

<style lang="scss" scoped>
#app {
  padding: 10px;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  .load {
    margin: 20px auto;
  }
}
</style>
