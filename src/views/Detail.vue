<template>
  <div class="detail">
    <Loading class="loading" v-if="loadView" />
    <DetailBody v-else />
  </div>
</template>

<script>
import Constant from '@/Constant'
import { DetailBody } from '@/containers'
import { Loading } from '@/components'

export default {
  name: 'Detail',
  components: {
    Loading,
    DetailBody,
  },
  data() {
    return {
      loadView: false,
    }
  },
  async mounted() {
    // API를 이용한 방법은 아래의 메소드를 이용하면 된다.
    // await this._fetchDetail()

    await this._fetchDetailToList()
    await this.$store.dispatch(
      Constant.Action.setComments,
      this.$route.params.id,
    )
  },
  methods: {
    async _fetchDetail() {
      this.loadView = true

      await this.$store.dispatch(
        Constant.Action.setDetail,
        this.$route.params.id,
      )

      this.loadView = false
    },
    async _fetchDetailToList() {
      this.loadView = true

      await this.$store.dispatch(
        Constant.Action.setDetailToList,
        this.$route.params.id,
      )

      this.loadView = false
    },
  },
}
</script>

<style lang="scss">
.detail {
  .loading {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
