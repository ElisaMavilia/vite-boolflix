<template>
  <HeaderComponent />
  <MainComponent />
  <FooterComponent />
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
          console.log(res.data.results);
        })
  
      },
      getSeries(){
        axios.get(this.store.apiUrl + this.store.endPoint.tv, this.store.options).then((res) => {
          console.log(res.data.results);
        })
      }
    },
    created(){
      this.getMovies();
      this.getSeries();
    }
  }
</script>

<style lang="scss" scoped>

</style>