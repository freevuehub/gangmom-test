<template>
  <div class="home">
    <post-list />
  </div>
</template>

<script>
import { PostList } from '@/containers'

export default {
  name: 'Home',
  components: {
    PostList,
  },
};
</script>
