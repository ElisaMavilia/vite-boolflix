<template>
    <div>
        <ul>
            <li v-for="query in store.query" :key="query.id"></li>
        </ul>
    </div>
</template>

<script>
import { store } from '/src/store.js';

    export default {
        name: 'CardList',
        data(){
            return {
            store
        }
    }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

</style>