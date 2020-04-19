<template>
  <div class="home">
    <post-list />
    <router-view />
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
  }
};
</script>
