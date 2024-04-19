<template>
    <div class="container">
      <!--  {{ store.movies }} -->
        <div class="row g-4">
            <div class="col-12 col-md-6 col-lg-3" v-for="movies in store.movies" :key="movies.id">
      
            <CardComponent :id="movies.id" :title="movies.title" :original="movies.original_title" :language="movies.original_language" :rating="movies.vote_average" :img="movies.poster_path"/>
        </div>
            </div>
    </div>
   <!--  {{ store.tv }} -->
    <div class="container">
        <div class="row g-4">
            <div class="col-12 col-md-6 col-lg-3" v-for="tv in store.tv" :key="tv.id">
      
            <CardComponent :id="tv.id" :title="tv.name" :original="tv.original_name" :language="tv.original_language" :rating="tv.vote_average" :img="tv.poster_path"/>
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
            store
        }
    }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

</style>