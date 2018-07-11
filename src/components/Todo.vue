<template>
    <div>
        <div class="loading-container">
            <div v-for="t in todos" :key="t.id" v-show="!loadingTodos">
                <pre class="todo" 
                     :class="{
                         'todo-selected': t.selected
                     }"
                     @click="goGetItHandler(t)">{{t}}</pre>
            </div>

            <div v-show="loadingTodos">
                <p align="center">Loading</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapMutations, mapState} from 'vuex'

    export default {
        methods: {
            ...mapActions({
                cacheTodos: 'cacheTodos',
                goGetIt: 'getById',
            }),
            ...mapMutations({
                selectTodo: 'selectTodo',
                unselectTodo: 'unselectTodo',
            }),
            goGetItHandler(todo) {
                this.selectTodo(todo.id)
                this.goGetIt(todo.id)
            }
        },
        mounted() {
            this.cacheTodos()
        },
        computed: {
            ...mapState({
                todo: state => state.todo,
                todos: state => state.todos,
                loadingTodos: state => state.loadingTodos,
            })
        }
    }
</script>

<style scoped>
    .todo-selected {
        border: 1px solid orange;
    }
</style>