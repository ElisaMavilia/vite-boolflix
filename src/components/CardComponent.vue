<template>
            <div class="card">
                <img v-if="img" :src="store.imageUrl+img" class="card-img-top" :alt="title">
                <img v-else src="/images/placeholder-movies.png" alt="placeholder movies">
            <div class="card-body">
                <h5 class="card-title">{{ title || name }}</h5><br>
                <span class="card-text">{{ original }}</span><br>
               
                <small>{{ rating }}</small><br>
                <div class="flag pt-3">
                    <img :src="imgFlag" :alt="language + 'flag'">
                </div><br>

                <div class="star">
                    <i :class="{'fa-solid' : n <= starVote, 'fa-regular' : n > starVote }" class="fa-star" v-for="n in 5"></i>
                </div>
            </div>
            </div>
</template>

<script>
import { store } from '/src/store.js';
    export default {
        name: 'CardComponent',
        props: ['id', 'title', 'original', 'language', 'rating', 'name', 'flag', 'img'],
        data(){
            return {
            store,
            flags: [
                'en', 'it', 'ja', 'se'
            ],
        }
    },
    method(){
       
    },
    computed: {

        imgFlag(){
            if(this.flags.includes(this.language)){
                return `/images/${this.language}.png`;
            }else{
                return '/images/placeholder.png'
            }
        },

        starVote(){
            return Math.ceil(this.rating / 2);       
        },
        
       
    },

    
    
}
</script>

<style lang="scss" scoped>
   .flag {
    img{
    height: 35px;
    display: block;
    border-radius: 50%;
   }
   }
   .fa-star{
    color: gold;
   }
   
</style>