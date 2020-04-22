<template>
  <div class="detail-body">
    <div>
      <button @click.prevent="onGoBack">뒤로</button>
      <h1>{{ detail.title }}</h1>
    </div>
    <div>
      <p>{{ detail.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Constant from '@/Constant'

export default {
  computed: {
    ...mapGetters({
      detail: Constant.Getter.detail,
    }),
  },
  methods: {
    onGoBack() {
      this.$router.back()
    },
  },
}
</script>

<style lang="scss">
.detail-body {
  max-width: 800px;
  margin: 0 auto;
}
</style>
