<script>
  import Main from './components/Main.vue'
  import Header from './components/Header.vue'
  import {store} from './assets/data/store.js'
  import axios from 'axios';
  


  export default {

    components:{
      Main,
      Header


    },
    data(){

      return{
      store
      }


    },
    methods:{

      getApi(){

        axios.get(this.store.apiUrl)
        .then(result => {
          this.store.cardList=result.data
          console.log(result.data);
          
        })
        .catch(error=> {

          console.log(error);
        })

      }

      


    },
    mounted(){
      this.getApi()
      
      


    }



  }
</script>

<template>
  <div>
    <Header />
     <Main />

  </div>
  

  
</template>



<style lang="scss">

@use './assets/scss/main.scss';

*{
  background-color: bisque;
  }
</style>
