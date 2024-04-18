<template>
    <div>
       <h5>{{ title }}</h5>
        <div>{{ original }}</div>
        <div>{{ language }}</div>
        <div>{{ rating }}</div> 
    </div>
</template>

<script>
import { store } from '/src/store.js';
    export default {
        name: 'CardComponent',
        props: ['id', 'title', 'original', 'language', 'rating' ],
        data(){
            return {
            store
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>