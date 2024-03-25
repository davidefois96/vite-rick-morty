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
  <main class="container d-flex  justify-content-center  ">

    <div class="row row-cols-4">

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