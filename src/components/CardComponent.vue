<template>
            <div class="card">
                <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ title }}</h5>
                <span class="card-text">{{ original }}</span>
                <small>{{ language }}</small>
                <small>{{ rating }}</small>
            </div>
            </div>
           
       

</template>

<script>
import { store } from '/src/store.js';
    export default {
        name: 'CardComponent',
        props: ['id', 'title', 'original', 'language', 'rating' ],
        data(){
            return {
            store
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>