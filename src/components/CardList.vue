<template>
    <div class="container">
        <div class="pb-4">
            <h2 class="text-uppercase" v-if="store.movies.length> 0">Movies</h2>
        </div>
        <div class="row g-4">
            <div class="col-12 col-md-6 col-lg-3" v-for="movies in store.movies" :key="movies.id">
            <CardComponent :id="movies.id" :title="movies.title" :original="movies.original_title" :language="movies.original_language" :rating="movies.vote_average" :img="movies.poster_path" :plot="movies.overview"/>
        </div>
            </div>
    </div>
    <div class="container">
        <div class="pt-5 pb-4">
            <h2 class="text-uppercase" v-if="store.movies.length > 0">Tv Shows</h2>
        </div>
        <div class="row g-4">
            <div class="col-12 col-md-6 col-lg-3" v-for="tv in store.tv" :key="tv.id">
            <CardComponent :id="tv.id" :title="tv.name" :original="tv.original_name" :language="tv.original_language" :rating="tv.vote_average" :img="tv.poster_path" :plot="tv.overview"/>
            </div>
        </div>
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
            store,
            showElements: false,
        }
    },
    
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

h2{
    font-size: 2.5em;
    color: white;
}

</style>