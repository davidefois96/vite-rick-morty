import { reactive } from "vue";

export const store = reactive({

  apiUrl:'https://rickandmortyapi.com/api/character/',

  
  cardList:[],

  apiParams:{
    name:'',
    status:'',
    species:'',
    page:1
  } ,

  totPages:null

 
});
