<template>
  <div class="detail-body">
    <detail-header />
    <div>
      <p>{{ detail.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Constant from '@/Constant'
import { DetailHeader } from '@/components'

export default {
  components: {
    DetailHeader,
  },
  computed: {
    ...mapGetters({
      detail: Constant.Getter.detail,
    }),
  },
}
</script>

<style lang="scss">
.detail-body {
  max-width: 800px;
  margin: 0 auto;
  padding-top: 40px;
}
</style>
