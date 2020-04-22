<template>
  <div>
    <div>
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
}
</script>
