<template>
  <div id="app">
    <NavbarComponent/>
    <BannerComponent/>
    <SliderComponent/>
    <AgendaComponent/>
    <div :style="{height:'350px', marginTop:'450px'}" class="imgBanner">      
    </div> 
    <SecondBannerComponent/>   
  </div>
</template>

<script>
import NavbarComponent from './components/Nabvar.vue';
import BannerComponent from './components/Banner.vue';
import SliderComponent from './components/Slider.vue';
import AgendaComponent from './components/Agenda.vue';
import SecondBannerComponent from './components/SecondBanner.vue';
export default {
  name: 'App',
  components: {
    NavbarComponent,
    BannerComponent,
    SliderComponent,
    AgendaComponent,
    SecondBannerComponent
  }
}
</script>


<style>
.imgBanner{
  background-image: url('./assets/BG médico sujetando manos de paciente.jpg');
}
@media (max-width: 400px) {
  .imgBanner{
    background-image: url('./assets/BG médico sujetando manos de paciente.jpg');
    margin-top: 800px !important;
    height:550px !important;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>