<script>
 import Card from './Card.vue';
 import {store} from '../assets/data/store.js'



  export default {

    
    components:{

      Card


    },
    data() {
      return {
        store
      }
    },
  }
</script>


<template>

  <main class="container">

    <div class="row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 d-flex justify-content-md-between justify-content-center">

      <card v-for="card in store.cardList.results"

      :key ="card.id"
      :name="card.name"
      :image="card.image"
      :status="card.status"
      :species="card.species"
    
      />

    </div>

    

  </main>
 
</template>


<style lang="scss" scoped>

</style>