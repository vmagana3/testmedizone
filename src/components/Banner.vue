<template>
    <div class="bg-red-500 w-full relative sm:mt-5">      
        <div class="w-full secondBanner">
          <!-- <img src="../assets/home nuevo medizona.png" class="secondBanner w-full" alt=""> -->
        </div>        
        <div class="absolute top-12 text-center flex flex-col justify-center items-center bannerText sm:top-5 sm:w-full" :style="{marginLeft:'650px'}">
            <p class="text-white font-semibold text-6xl sm:text-xl">Médicos en tu zona</p>
            <p class="text-white text-xl mt-5 sm:text-sm">Encuentra al médico o especialista de la salud que <br> estés buscando y obtén el mejor servicio integral.</p>
            <img class="w-6/12 mt-6" src="../assets/pleca_colores.png" alt="">
            <button class="rounded-2xl mt-7 w-4/12 text-white bg-blue pl-8 pr-8 pt-3 pb-3 font-bold sm:w-6/12 sm:mt-4">!REGÍSTRATE</button>
        </div>        
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'BannerComponent',
    components: {
  
    }
  }
  </script>


<style>
.secondBanner{
  width: 100%;
  height: 350px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('../assets/home nuevo medizona.png');  
}
@media (max-width: 400px) {
  .secondBanner{
    width: 100%;
    height: 250px;
    background-repeat: repeat-x;    
  }

  .bannerText{
    margin-left: 0px !important;
  }
}
</style>
  