<script>
 import {store} from '../assets/data/store.js'

  export default {

    props:{
      image:String,
      name:String,
      status:String,
      species:String

    },

    data(){
      

      
      return{
        store

      }


    }
  }
</script>

<template>

  

    <div class=" text-center my-5" style="width: 18rem;">

     <img class="card-img-top rounded-circle" :src="image" :alt="name">

     <div class=" pt-3 ">

       <h4 class="mb-3">{{ name }}</h4>

       <p>{{ status }}</p>
       <p>{{ species }}</p>

       
      </div>

      
    </div>


  
  
  
</template>



<style lang="scss" scoped>


main {

  
  div{

   
    img{

      
      &:hover{

        scale: 1.1;
        transition-duration: 0.7;

      }

    }


  }

}

</style>