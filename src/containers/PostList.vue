<template>
  <div>
    <post-list-item
      v-for="item in posts"
      :key="item.id"
      :item="item"
    />
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
    ...mapGetters({
      posts: Constant.Getter.posts
    })
  },
}
</script>
