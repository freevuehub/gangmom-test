<template>
  <div>
    <DetailBody />
  </div>
</template>

<script>
import Constant from '@/Constant'
import { DetailBody } from '@/containers'

export default {
  name: 'Detail',
  components: {
    DetailBody,
  },
  async created() {
    await this.$store.dispatch(Constant.Action.setDetail, this.$route.params.id)
  },
}
</script>
