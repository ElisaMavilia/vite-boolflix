<template>
    <div v-for="query in store" :key="query.id">
        <CardComponent :id="query.id" :title="query.title" :original="query.original_title" :language="query.original_language" :rating="query.vote_average"/>
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