<template>
  <div id="app">
    <NavbarComponent/>
    <BannerComponent/>
    <SliderComponent/>
    <AgendaComponent/>
    <div :style="{height:'350px', marginTop:'450px'}">
      <img src="./assets/BG médico sujetando manos de paciente.jpg" alt="" :style="{ width:'100%', height:'100%'}">
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
