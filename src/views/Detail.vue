<template>
  <div>
    {{ $route.params.id }}
  </div>
</template>

<script>
import Constant from '@/Constant'

export default {
  name: 'Detail',
  async created() {
    await this.$store.dispatch(Constant.Action.setDetail, this.$route.params.id)
  }
}
</script>
