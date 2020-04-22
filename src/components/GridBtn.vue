<template>
  <button class="grid-btn">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script>
export default {
  name: 'GridBtn',
}
</script>

<style lang="scss">
.grid-btn {
  display: flex;
  width: 45px;
  height: 45px;
  flex-wrap: wrap;
  justify-content: space-between;
  span {
    display: block;
    background-color: #d3121a;
    border-radius: 4px;
  }
  &.list {
    flex-direction: column;
    height: 35px;
    span {
      width: 45px;
      height: 5px;
      margin-top: auto;
      &:nth-child(1) {
        margin-top: 0;
      }
    }
  }
  &.grid {
    span {
      width: 20px;
      height: 20px;
      &:nth-child(1),
      &:nth-child(2) {
        margin-bottom: 5px;
      }
    }
  }
}
</style>