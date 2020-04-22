<template>
  <button class="grid-btn" @click.prevent="onModeChange">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script>
export default {
  name: 'GridBtn',
  model: {
    event: 'change',
    prop: 'value',
  },
  props: {
    value: String,
  },
  methods: {
    onModeChange() {
      switch (this.value) {
        case 'list':
          this.$emit('change', 'grid')

          break
        case 'grid':
          this.$emit('change', 'list')

          break
      }
    },
  },
}
</script>

<style lang="scss">
.grid-btn {
  display: flex;
  width: 45px;
  height: 45px;
  flex-wrap: wrap;
  justify-content: space-between;
  cursor: pointer;
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
  @media screen and (max-width: 640px) {
    & {
      display: none;
    }
  }
}
</style>