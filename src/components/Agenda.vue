<template>
    <div class="flex flex-col w-full justify-center items-center -mt-8 bg-transparent absolute">
        <p class="font-bold text-blue text-2xl">Encuentra a tu especialista</p>
        <img src="../assets/flecha_encuentra_especialista.png" class="mt-8 mb-5" alt="">
        <AgendaCard/>
    </div>
  </template>
  
  <script>
  import AgendaCard from './AgendaCard.vue';
  export default {
    name: 'AgendaComponent',
    components: {
      AgendaCard
    }
  }
  </script>
  