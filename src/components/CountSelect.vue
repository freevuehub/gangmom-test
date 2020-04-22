<template>
  <div class="count-select">
    <label>포스팅 객수:</label>
    <select @change="onCountChange" :value="value">
      <option value="8">8 개</option>
      <option value="16">16 개</option>
    </select>
  </div>
</template>

<script>
export default {
  model: {
    event: 'change',
    prop: 'value',
  },
  props: {
    value: String,
  },
  methods: {
    onCountChange($event) {
      this.$emit('change', $event.target.value)
    },
  },
}
</script>

<style lang="scss">
.count-select {
  display: flex;
  margin-left: auto;
  align-items: center;
  select {
    margin-left: 10px;
    border: 1px solid #d3121a;
    height: 30px;
    width: 50px;
  }
}
</style>