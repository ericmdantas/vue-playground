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
    import {mapActions, mapState} from 'vuex'

    export default {
        methods: {
            someHandler() {
                this.some(Date.now() % 100)
            },
            ...mapActions({
                some: 'getSome'
            })
        },
        mounted() {
            this.some(99)
        },
        computed: {
            ...mapState({
                todo: state => state.todo,
                todoLoading: state => state.todoLoading,
                todoCached: state => state.cacheTodoDone,
            })
        }
    }
</script>

<style scoped>
.loading-container.is-loading {
    background-color: #f1f2f3;
    border: 1px solid blue;
}
</style>