<template>
  <div class="list-header">
    <grid-btn class="grid" />
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
    }
  },
  watch: {
    count(val) {
      this.$router.push({
        query: {
          count: val,
        },
      })
      console.log(val)
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
}
</style>