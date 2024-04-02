<script>
import {store} from '../assets/data/store.js'


  export default {

    data() {
      return {
        
        store,
        p1:'',
        p2:'',
        p3:''

        
      }
    },
    methods: {
      
      
    },
    mounted() {
      
    },
    
  }
  
</script>

<template>
  <div class=" text-center flex-column flex-sm-row  d-flex justify-content-center">

    <div>
      <h4>Name</h4>
      
      <input type="text" v-model.trim="this.p1" @click="this.store.apiParams.name=''" @keyup.enter="this.store.apiParams.name=this.p1,this.store.apiParams.page=1,$emit('search')">

      
    
    </div>

    <div>
      <h4>Status</h4>
      <input type="text" v-model.trim="this.p2" @click="this.store.apiParams.status=''" @keyup.enter="this.store.apiParams.status=this.p2,this.store.apiParams.page=1,$emit('search')">

      
      
    </div>
   
    <div>
      <h4>Species</h4>


      <input type="text" v-model.trim="this.p3" @click="this.store.apiParams.species=''" @keyup.enter="this.store.apiParams.species=this.p3,this.store.apiParams.page=1 ,$emit('search')">

      
      
    </div>

    

    
   
    
    

  </div>

  <h2 class="text-danger text-center mt-3 " v-if="this.store.cardList.length==0">

    Nessun risultato


    </h2>

  
</template>



<style lang="scss" scoped>

input{
  background-color: white;
  margin-right: 3px;
}
</style>