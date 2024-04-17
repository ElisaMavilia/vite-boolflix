<template>
  <div id="#app">
  <HeaderComponent @titleSearch = "searchMovie"/>
  <MainComponent />
  <FooterComponent />
  </div>
  
</template>

<script>

import axios from 'axios';
import { store } from '/src/store.js';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import CardList from './components/CardList.vue';
import CardComponent from './components/CardComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent,
      CardList,
      CardComponent,
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
          console.log("risultati film", res.data.results);
        })
  
      },
      getSeries(){
        axios.get(this.store.apiUrl + this.store.endPoint.tv, this.store.options).then((res) => {
          console.log("risultati serie", res.data.results);
        })
      },

      searchMovie(){
        this.store.query = this.store.options.params.query;
        this.getMovies();
        this.getSeries();
        console.log("query:", this.store.query);
      
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

#app{
  height: 100vh;
  width: 100%;
}

</style>