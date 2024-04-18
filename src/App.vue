<template>
  <div id="#app">
  <HeaderComponent @titleSearch = "getData"/>
  <MainComponent />
  </div>
  
</template>

<script>

import axios from 'axios';
import { store } from '/src/store.js';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent,
      FooterComponent
    },
    data() {
      return {
        store
      }
    },
    methods:{
      getMovies(){
        axios.get(this.store.apiUrl + this.store.endPoint.movie, this.store.options).then((res) =>{
         /*  console.log("risultati film", res.data.results); */
          this.store.movies= res.data.results;
          console.log("query movie:", this.store.movies);
        })
  
      },
      getSeries(){
        axios.get(this.store.apiUrl + this.store.endPoint.tv, this.store.options).then((res) => {
          this.store.tv = res.data.results;
          console.log("query tv:", this.store.tv);
        })
      },

      getData(){
        this.getMovies();
        this.getSeries();
      console.log("store", store);
      }
    },
    created(){
      //this.getMovies();
      //this.getSeries();
    }
  }
</script>

<style lang="scss" scoped>

</style>