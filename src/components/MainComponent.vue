<template>
    <main>
      <CardList />
      <CardComponent />
    </main>
</template>

<script>
import { store } from '/src/store.js';
import CardList from '../components/CardList.vue';
import CardComponent from '../components/CardComponent.vue';
    export default {
        name: 'MainComponent',
        components: {
            CardList,
            CardComponent,
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
    margin-top: 100px;
}
</style>