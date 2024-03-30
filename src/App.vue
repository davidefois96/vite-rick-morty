<script>
  import Main from './components/Main.vue'
  import Header from './components/Header.vue'
  import SearchBar from './components/SearchBar.vue'

  import {store} from './assets/data/store.js'
  import axios from 'axios';
  


  export default {

    components:{
      Main,
      Header,
      SearchBar


    },
    data(){

      return{
      store
      }


    },
    methods:{

      getApi(){
        

        
        axios.get(this.store.apiUrl,
        
        {
          
          params:this.store.apiParams


        }
        )
        .then(result => {
          this.store.cardList=result.data
          console.log(result.data);
       
        })
        .catch(error=> {

          console.log(error);
        })

      this.store.cardList.results.forEach(card => {

          
      if (!card.name.includes(this.store.apiParams.name)||!card.status.includes(this.store.apiParams.status)||!card.species.includes(this.store.apiParams.species)) {

        
        this.store.cardList=[]
        
       
      } 

      


        });

      },
      

    },
    mounted(){
      this.getApi()
      
    }



  }
</script>

<template>
  <div>
    <Header />
    <SearchBar 
    @search="getApi"
    
    />

     
    <Main />

  </div>
  

  
</template>



<style lang="scss">

@use './assets/scss/main.scss';

*{
  background-color: bisque;
  }
</style>
