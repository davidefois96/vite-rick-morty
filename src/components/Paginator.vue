<script>
import {store} from '../assets/data/store.js'


  export default {
    data() {
      return {
        store
      }
    },
   
    
  }
</script>


<template>
  
  <div v-if="store.cardList.length!=0">


    <div class="d-flex justify-content-center my-3">
    <button v-if="this.store.apiParams.page>1" type="button" class="btn btn-primary" @click="this.store.apiParams.page=this.store.apiParams.page-1, $emit('search')" >Prev</button>
    <button v-if="this.store.apiParams.page<this.store.totPages" type="button" class="btn btn-primary" @click="this.store.apiParams.page=this.store.apiParams.page+1, $emit('search')">Next</button>
    

    </div>

    <h5 class="text-center">Page {{store.apiParams.page}} of {{store.totPages}}  </h5>


  
  </div>

  
</template>







<style lang="scss" scoped>

</style>