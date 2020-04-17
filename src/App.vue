<template>
  <div id="app">
    <router-view />
    {{ posts }}
  </div>
</template>

<script>
import Constant from '@/Constant'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters({
      posts: Constant.Getter.posts
    })
  },
  async created() {
    await this.$store.dispatch(Constant.Action.setPosts)
  }
}
</script>
