<template>
  <div class="post-list">
    <post-list-item :class="itemClass" v-for="item in posts" :key="item.id" :item="item" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Constant from '@/Constant'
import { PostListItem } from '@/components'

export default {
  components: {
    PostListItem,
  },
  computed: {
    itemClass() {
      return this.$route.query.mode || 'list'
    },
    ...mapGetters({
      posts: Constant.Getter.posts,
    }),
  },
}
</script>

<style lang="scss">
.post-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
