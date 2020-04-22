<template>
  <div class="list-header">
    <grid-btn :class="viewMode" v-model="viewMode" />
    <CountSelect v-model="count" />
  </div>
</template>

<script>
import { GridBtn, CountSelect } from '@/components'

export default {
  name: 'ListHeader',
  components: {
    GridBtn,
    CountSelect,
  },
  data() {
    return {
      count: this.$route.query.count || '8',
      viewMode: this.$route.query.mode || 'list',
    }
  },
  watch: {
    count(val) {
      this.$router.push({
        query: {
          ...this.$route.query,
          count: val,
        },
      })
    },
    viewMode(val) {
      this.$router.push({
        query: {
          ...this.$route.query,
          mode: val,
        },
      })
    },
  },
}
</script>

<style lang="scss">
.list-header {
  padding: 5px;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 60px;
}
</style>