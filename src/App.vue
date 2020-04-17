<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  async mounted() {
    const res = await this.$http.get('https://jsonplaceholder.typicode.com/todos/1')

    console.log(res)
  } 
}
</script>
