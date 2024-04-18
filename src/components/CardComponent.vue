<template>
            <div class="card">
                <img :src="store.imageUrl+store.img" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ title }}</h5><br>
                <span class="card-text">{{ original }}</span><br>
                <small>{{ language }}</small><br>
                <small>{{ rating }}</small>
            </div>
            </div>
           
       

</template>

<script>
import { store } from '/src/store.js';
    export default {
        name: 'CardComponent',
        props: ['id', 'title', 'original', 'language', 'rating', 'img' ],
        data(){
            return {
            store
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>