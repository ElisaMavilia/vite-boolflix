<template>
            <div class="card">
                <img :src="store.imageUrl+img" class="card-img-top" :alt="title">
            <div class="card-body">
                <h5 class="card-title">{{ title || name }}</h5><br>
                <span class="card-text">{{ original }}</span><br>
               
                <small>{{ rating }}</small><br>
                <div class="flag">
                    <img :src="`/images/${language}.png`" :alt="language + 'flag'">
                </div><br>
            </div>
            </div>
</template>

<script>
import { store } from '/src/store.js';
    export default {
        name: 'CardComponent',
        props: ['id', 'title', 'original', 'language', 'rating', 'img', 'name', 'flag'],
        data(){
            return {
            store
        }
    }
    }
</script>

<style lang="scss" scoped>
   .flag img{
    width: 40px;
    height: 40px;
    display: block;
    border-radius: 50%;
   }
</style>