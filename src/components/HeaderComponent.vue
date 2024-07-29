<template>
    <header class="d-flex align-content-center align-items-center">
        <div id="left-header" class="ps-4">
            <h2 id="title" class="text-uppercase">Boolflix</h2>
        </div>
        <div id="right-header" >
            <form class="d-flex justify-content-between">
                <div class="form-group me-4">
                    <input type="text" class="form-control" id="entertext" placeholder="Search something" v-model.trim="store.options.params.query " @keyup.enter="$emit ('titleSearch')"/>
                 </div>
                <div class="form-group"></div>
                <button type="button" class="btn btn-danger me-4" @click="$emit ('titleSearch')" >Search</button>
            </form>
        </div>
    </header>
</template>

<script>
import { store } from '/src/store.js';
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

header{
    width: 100%;
    height: 90px;
    background-color: $blackprimary;
    color: $redboolfix;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3000;
    /* border-bottom: 1px solid grey; */

#title {
  font-family: 'Bebas Neue', sans-serif; 
  color: #e50914; 
  font-size: 1.8rem; 
  letter-spacing: 2px; 
  text-transform: uppercase; 
  margin: 0; 
}
#rigth-header{
    width: 30%;
}    

#left-header{
    width: 70%;
}   
input{
    background-color: $blackprimary;
    color: white;
}
::placeholder{
    color: lightgrey;
}

.btn-danger{
    font-weight: 400;
    background-color: $redboolfix;
}
}

</style>