<template>
  <div class="post-item">
    <router-link :to="to">
      <img :src="imgUrl" :alt="imgUrl" />
      <div class="txt">
        <h3>{{ item.title }}</h3>
        <p class="body">{{ item.body }}</p>
        <p class="writer">{{ item.user.name }}</p>
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
      margin-right: auto;
      width: 150px;
      border-radius: 4px;
    }
    .txt {
      h3 {
        margin-bottom: 15px;
        color: #d3121a;
        font-size: 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        white-space: nowrap;
      }
      .body {
        color: #2e2e2e;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .writer {
        color: #2e2e2e;
        text-align: right;
        margin-top: 20px;
        padding-right: 20px;
        font-style: italic;
      }
    }
  }
  &.list {
    width: 100%;
    a {
      width: 100%;
      .txt {
        width: calc(100% - 160px);
      }
    }
  }
  &.grid {
    width: 23%;
    margin: 0 auto 30px;
    a {
      flex-direction: column;
      img {
        width: 100%;
        margin-bottom: 10px;
      }
      .txt {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 640px) {
    &.grid {
      width: 100%;
      margin-bottom: 20px;
      a {
        width: 100%;
        flex-direction: row;
        img {
          width: 150px;
          margin-bottom: 0;
        }
        .txt {
          width: calc(100% - 160px);
        }
      }
    }
  }
}
</style>
