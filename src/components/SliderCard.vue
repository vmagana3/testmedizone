<template>
    <div class="flex flex-col justify-center items-center text-center" id="app"> 
        <div>
            <img :src="this.img" alt="" class="w-full">        
        </div>                  
        <p class="text-white text-sm font-semibold mt-1">{{this.title}}</p>        
    </div>
  </template>
  
  <script>

  export default {
    name: 'App',
    props:['img', 'title'],
    components: {
    },
    mounted(){
        console.log(this.img);
    }
  }
  </script>
  