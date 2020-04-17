<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Constant from '@/Constant'

export default {
  name: 'App',
  async created() {
    await this.$store.dispatch(Constant.Action.setPosts)
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
