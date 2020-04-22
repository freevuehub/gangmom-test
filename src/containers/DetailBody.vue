<template>
  <div class="detail-body">
    <detail-header />
    <div class="content">
      <h1>{{ detail.title }}</h1>
      <p>{{ detail.body }}</p>
    </div>
    <div class="comment">
      <ul>
        <li v-for="item in comments" :key="item.id">
          <p v-html="buildHtml(item.body)"></p>
          <div>
            <p>{{ item.name }}</p>
            <p>{{ item.email }}</p>
          </div>
          {{ item }}
        </li>
      </ul>
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
    buildHtml() {
      return html => {
        return html.replace(/\n/g, '<br>')
      }
    },
    ...mapGetters({
      detail: Constant.Getter.detail,
      comments: Constant.Getter.comments,
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
