<template>
  <div id="app">
    <div id="nav">
      <a href="#" @click="goToTodo()">Todo</a> |
      <router-link to="/about">About</router-link>
    </div>

    <div class="todo-selected">
      <pre v-show="!loadingTodo">{{todo}}</pre>
      <pre v-show="loadingTodo">Loading...</pre>
    </div>

    <router-view/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import router from './router'

  export default {
    router,
    methods: {
      goToTodo() {
        this.$router.push('/')
      }
    },
    computed: {
      ...mapState({
        todo: state => state.todo,
        loadingTodo: state => state.loadingTodo,
      })
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

.todo-selected {
  margin-top: 15px;
  border: 1px solid blue;
  background-color: #f1f2f3;
}
</style>
