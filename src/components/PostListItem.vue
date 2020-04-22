<template>
  <div class="post-item">
    <router-link :to="to">
      <img :src="imgUrl" :alt="imgUrl" />
      <div class="txt">
        <h3>{{ item.title }}</h3>
        <p>{{ item.body }}</p>
      </div>
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
        'https://via.placeholder.com/150/56a8c0',
      ],
    }
  },
  computed: {
    to() {
      return {
        name: 'Detail',
        params: { id: this.item.id },
      }
    },
    imgUrl() {
      const ran = Math.ceil(Math.random() * this.imgList.length)

      return this.imgList[ran - 1]
    },
  },
}
</script>

<style lang="scss">
.post-item {
  margin-bottom: 20px;
  a {
    display: flex;
    align-items: center;
    img {
      display: block;
      margin-right: 10px;
      width: 150px;
    }
    h3 {
      font-size: 20px;
    }
  }
}
</style>
