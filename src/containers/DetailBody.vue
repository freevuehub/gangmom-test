<template>
  <div class="detail-body">
    <detail-header />
    <div class="content">
      <h1>제목: {{ detail.title }}</h1>
      <p>{{ detail.body }}</p>
    </div>
    <loading v-if="!commentView" />
    <comments-list v-else :comments="comments" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Constant from '@/Constant'
import { DetailHeader, CommentsList, Loading } from '@/components'

export default {
  components: {
    DetailHeader,
    CommentsList,
    Loading,
  },
  data() {
    return {
      commentView: false,
    }
  },
  computed: {
    ...mapGetters({
      detail: Constant.Getter.detail,
      comments: Constant.Getter.comments,
    }),
  },
  async mounted() {
    await this.$store.dispatch(
      Constant.Action.setComments,
      this.$route.params.id,
    )

    this.commentView = true
  },
}
</script>

<style lang="scss">
.detail-body {
  max-width: 800px;
  margin: 0 auto;
  padding-top: 40px;
  .content {
    border-bottom: 1px solid #e2e2e2;
    h1 {
      color: #4e4e4e;
      margin: 10px 0;
      border-bottom: 1px solid #e2e2e2;
    }
    p {
      padding: 10px;
      font-size: 1.3rem;
      color: #4e4e4e;
      line-height: 24px;
    }
  }
}
</style>
