<template>
  <div id="app">
    <h1>!</h1>
    <div id="nav">
      <a href="#" @click="goToTodo()">Todo</a> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import router from './router'

  export default {
    router,
    methods: {
      goToTodo() {
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
