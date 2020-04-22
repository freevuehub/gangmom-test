<template>
  <div class="home">
    <list-header class="header" />
    <div class="container">
      <post-list />
    </div>
    <router-view class="detail-view" />
  </div>
</template>

<script>
import Constant from '@/Constant'
import { PostList, ListHeader } from '@/containers'

export default {
  name: 'Home',
  components: {
    ListHeader,
    PostList,
  },
  async created() {
    await this.$store.dispatch(Constant.Action.setPosts)
  },
}
</script>

<style lang="scss" scoped>
.home {
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .container {
    padding-top: 60px;
    max-width: 960px;
    margin: 0 auto;
  }
  .detail-view {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    z-index: 10;
  }
}
</style>
