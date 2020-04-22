<template>
  <div class="loading">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'loading',
  mounted() {
    console.log(this.$route)
  },
}
</script>

<style lang="scss">
.loading {
  width: 25px;
  height: 25px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  animation: rotate linear 1s infinite;
  span {
    display: block;
    width: 10px;
    height: 10px;
    background-color: #d3121a;
    border-radius: 50%;
    animation: fade linear 0.8s infinite;

    &:nth-child(1) {
      margin-bottom: auto;
      animation-delay: 0.1s;
    }
    &:nth-child(2) {
      margin-left: auto;
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.3s;
    }
    &:nth-child(4) {
      margin-bottom: auto;
      margin-left: auto;
      animation-delay: 0.4s;
    }
  }
}

@keyframes fade {
  0% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
