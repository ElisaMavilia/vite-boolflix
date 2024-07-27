<template>
    <main>
        <section v-if="store.movies.length > 0 || store.tv.length > 0">
            <CardList/>
        </section>

        <section id="section-up" v-else>
            <div id="section-up-text">
                <h2 class="text-center text-light">Unlimited movies, TV shows and more.</h2>
                <h4 class="text-center text-light">Watch anywhere. Cancel anytime.</h4>
                <p class="text-center text-light">Ready to watch? Enter your email to create or restart your membership.</p>
                <form class="d-flex justify-content-center">
                    <input type="text" placeholder="Email address">
                    <button type="button" class="btn btn-danger mx-4 " >Get Started</button>
                </form>
            </div>
            
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
            store
        }
    }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

main{
    width: 100%;
    height: calc(100% - 190px);
    padding: 180px 0;
}

#section-up {
  position: relative;
  width: 100%;
  height: 400px;
  background-image: url(../assets/img/netflix-background.jpg);
  background-size: cover;
  background-position: center;
}

#section-up::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Colore nero con trasparenza al 50% */
  z-index: 1;
}

/* Posiziona l'elemento interno di #section-up sia sopra l'overlay */
#section-up > * {
  position: relative;
  z-index: 2;
}

#section-up-text {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>