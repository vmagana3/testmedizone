<template>
    <div class="flex-col items-center">
        <img :src="img" alt="" class="w-8/12 m-auto">
        <p class="text-center text-xs text-gray-500">{{title}}</p>
        <p class="text-center font-bold text-blue">{{subTitle}}</p>
    </div>
  </template>

  <script>
  
  export default {
    name: 'circlesComponent',
    props:['img', 'title', 'subTitle'],
    components: {

    }
  }
  </script>
  