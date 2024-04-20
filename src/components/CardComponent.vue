<template>
            <div class="flip-card mb-4">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img v-if="img" :src="store.imageUrl+img" class="card-img-top" :alt="title">
                        <img v-else src="/images/placeholder-movies.png" alt="placeholder movies">
                    </div>
                
                    <div class="flip-card-back px-5 py-3">
                        <h5 class="card-title">{{ title || name }}</h5><br>
                        <span class="card-text"><em>{{ original }}</em></span><br>
                        <div class="flag pt-3">
                            <img :src="imgFlag" :alt="language + 'flag'">
                        </div><br>
                        <div class="star">
                        <i :class="{'fa-solid' : n <= starVote, 'fa-regular' : n > starVote }" class="fa-star" v-for="n in 5"></i>
                        <p>{{ plot }}</p>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
import { store } from '/src/store.js';
    export default {
        name: 'CardComponent',
        props: ['id', 'title', 'original', 'language', 'rating', 'name', 'flag', 'img', 'plot'],
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
                return '/images/placeholder.png';
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

.flip-card {
    background-color: transparent;
    aspect-ratio: 1/1.5;
    perspective: 1000px;
    }

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
  overflow: hidden;
  object-fit: cover;
}

.flip-card-back {
  background-color: rgba(0, 0, 0, 0.625);
  color: white;
  transform: rotateY(180deg);
  overflow-y: auto;
}
p{
    font-size: 1em;
    padding-top: 10px;
}

h5{
    font-size: 1.5em;
    font-weight: 600;
}
   
</style>