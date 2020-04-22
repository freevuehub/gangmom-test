<template>
  <div class="home">
    <div>
      <button>그리드</button>
    </div>
    <div class="container">
      <post-list />
    </div>
    <router-view class="detail-view" />
  </div>
</template>

<script>
import Constant from '@/Constant'
import { PostList } from '@/containers'

export default {
  name: 'Home',
  components: {
    PostList,
  },
  async created() {
    await this.$store.dispatch(Constant.Action.setPosts)
  },
}
</script>

<style lang="scss" scoped>
.home {
  .container {
    max-width: 1200px;
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
