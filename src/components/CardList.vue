<template>
    <div v-for="movies in store.movies" :key="movies.id">
        <CardComponent :id="movies.id" :title="movies.title" :original="movies.original_title" :language="movies.original_language" :rating="movies.vote_average"/>
    </div>
</template>

<script>
import { store } from '/src/store.js';
import CardComponent from '../components/CardComponent.vue';
    export default {
        name: 'CardList',
        components:{
            CardComponent,
        },
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