<template>
    <footer>
        footer
    </footer>
</template>

<script>
import { store } from '/src/store.js';
    export default {
        name: 'FooterComponent',
        data(){
            return {
            store
        }
    }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

footer{
    width: 100%;
    height: 100px;
    background-color: $blackprimary;
    color: white;
   
}
</style>