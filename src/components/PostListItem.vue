<template>
  <div>
    <router-link :to="to">
      <img :src="imgUrl" :alt="imgUrl">
      {{ item.title }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      imgList: [
        'https://via.placeholder.com/150/771796',
        'https://via.placeholder.com/150/92c952',
        'https://via.placeholder.com/150/56a8c0'
      ]
    }
  },
  computed: {
    to() {
      return {
        name: 'Detail',
        params: { id: this.item.id }
      }  
    },
    imgUrl() {
      const ran = Math.ceil(Math.random() * this.imgList.length)

      return this.imgList[ran - 1]
    }
  }
}
</script>
