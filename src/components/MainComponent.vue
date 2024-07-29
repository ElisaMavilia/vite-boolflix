<template>
    <main>
        <section v-if="store.movies.length > 0 || store.tv.length > 0">
            <CardList/>
        </section>

        <section id="section-up" v-else>
            <div id="section-up-text">
                <h2 class="text-center text-light">Unlimited movies, TV shows and more.</h2>
                <h4 class="text-center text-light">Watch anywhere. Cancel anytime.</h4>
                <p class="text-center text-light">Ready to watch? Search a movie or a tv-show.</p>
                <form class="d-flex justify-content-between">
                <div class="form-group me-4">
                    <input type="text" class="form-control" id="entertext" placeholder="Search something" v-model.trim="store.options.params.query " @keyup.enter="$emit ('titleSearch')"/>
                 </div>
                <div class="form-group"></div>
                <button type="button" class="btn btn-danger me-4" @click="$emit ('titleSearch')" >Search</button>
            </form>
            </div>
        <section id="section-down" class="d-flex">
            <div id="section-down-left-text" class="text-light ps-4">
                <h2 class="pt-4">Enjoy on your TV</h2>
                <h6>Watch on Smart TVs, Playstation, Xbox, Chromecast,<br> Apple TV, Blu-ray players, and more.</h6>
            </div>
            <div class="">
                <video class="ps-4 pe-4" id="section-down-video" src="../assets/video/netflix-lite.mov" autoplay loop muted playsinline></video>
            </div>
        </section>
    </section>
    </main>
</template>

<script>
import { store } from '/src/store.js';
import CardList from '../components/CardList.vue';
    export default {
        name: 'MainComponent',
        components: {
            CardList,
    },
        data(){
            return {
            store,
        }
    },

    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

main {
  width: 100%;
 /*  height: calc(100% - 190px);  */
  background-color: $blackprimary;
}

#section-up {
  position: relative;
  width: 100%;
  height: 400px;
  background-image: url(../assets/img/netflix-background.jpg);
  background-size: cover;
  background-position: center;
  border-bottom: 3px solid rgba(211, 211, 211, 0.398);
  
}

#section-up::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Colore nero con trasparenza al 60% */
  z-index: 1;
}

#section-up > * {
  position: relative;
  z-index: 2;
}

#section-up-text {
  width: 100%;
  height: 100%;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center; 
}

#section-down-left-text{
   background-color: $blackprimary
}

#section-down {
  width: 100%;
  padding-top: 50px;
  background-color: $blackprimary;
  display: flex;
  justify-content: space-between;
  padding-left: 50px;
}

#section-down-video {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $blackprimary;
  margin-right: 180px;
}

#section-down-video video {
  width: 15%; 
  max-width: 200px; 
  height: auto; 
  object-fit: cover;
 
}

</style>