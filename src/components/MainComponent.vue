<template>
    <main>
        main
    </main>
</template>

<script>
import { store } from '/src/store.js';
    export default {
        name: 'MainComponent',
        data(){
            return {
            store
        }
    }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;


</style>