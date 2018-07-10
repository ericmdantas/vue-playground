<template>
    <div>
        <div class="loading-container" :class="{'is-loading': todoLoading}">
            <pre>{{todo}}</pre>
            <pre>{{todoCached}}</pre>
            <button type="button" @click="someHandler()">next</button>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import store from '../store'

    export default {
        store,
        methods: {
            someHandler() {
                this.some(Date.now() % 100)
            },
            ...mapActions({
                some: 'getSome'
            })
        },
        mounted() {
            store.dispatch('cacheTodo')
        },
        computed: {
            todo() {
                return store.state.todo
            },
            todoLoading() {
                return store.state.todoLoading
            },
            todoCached() {
                return store.state.cacheTodoDone
            }
        }
    }
</script>

<style scoped>
.loading-container.is-loading {
    background-color: #f1f2f3;
    border: 1px solid blue;
}
</style>