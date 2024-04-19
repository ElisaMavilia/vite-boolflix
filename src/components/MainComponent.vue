<template>
    <main>
      <CardList/>
     <!--   -->
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
</style>