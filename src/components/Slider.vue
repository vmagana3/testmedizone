<template>
    <div class="bg-blue pl-20 pr-20">      
      <vueper-slides
        :visible-slides="8"
        slide-multiple            
        :slide-ratio="1/4"
        :dragging-distance="200"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
        :arrows-outside="true"   
        :bullets="false"      
        fixed-height="200px"       
      >
      
      <template #arrow-left>            
        <img src="../assets/BOTÓN CARRUSEL IZQ.png" alt="">
      </template>

      <template #arrow-right>
        <img src="../assets/BOTÓN CARRUSEL DER.png" alt="">
      </template>


        <vueper-slide            
          v-for="(slide, i) in slides"
          :key="i"
          :title="slide.title"
          :content="slide.content">          

          <template #content>
            <div class="vueperslide__content-wrapper">              
              <SliderCard :img="slide.img" :title="slide.title"/>                          
            </div>
          </template>
        </vueper-slide>
    </vueper-slides>
    </div>    
  </template>
  
  <script>
  import { VueperSlides, VueperSlide } from 'vueperslides';
  import 'vueperslides/dist/vueperslides.css';  
  import SliderCard from './SliderCard.vue';
  export default {
    name: 'SliderComponent',
    components: {
    VueperSlides,
    VueperSlide,
    SliderCard
},
    data(){
      return{
        slides:[
        {
            img: require('../assets/icono_alergia.png'),
            title: 'Alergia e inmunología clínica'
          },
          {
            img: require('../assets/icono_cardiologia.png'),
            title: 'Carfiologia.'
          },
          {
            img: require('../assets/icono_cirugia_general.png'),
            title: 'Cirugía General.'
          },
          {
            img: require('../assets/icono_dermatologia.png'),
            title: 'Dermatología.'
          },
          {
            img: require('../assets/icono_ginecologia.png'),
            title: 'Ginecología y obstetricia'
          },
          {
            img: require('../assets/icono_neurologia.png'),
            title: 'Neurología.'
          },
          {
            img: require('../assets/icono_nutriologia.png'),
            title: 'Nutriología.'
          },
          {
            img: require('../assets/icono_odontología.png'),
            title: 'Odontología.'
          },
          {
            img: require('../assets/icono_oftalmologia.png'),
            title: 'Oftalmología.'
          },
          {
            img: require('../assets/icono_ortopedia.png'),
            title: 'Ortopedia.'
          },
          {
            img: require('../assets/icono_otorrinolaringologia.png'),
            title: 'Otorrinolaringologia.'
          },
          {
            img: require('../assets/icono_pediatria.png'),
            title: 'Pediatría.'
          },
          {
            img: require('../assets/icono_dermatologia.png'),
            title: 'Psicología.'
          },
          {
            img: require('../assets/icono_psiquiatria.png'),
            title: 'Psiquiatría.'
          },
          {
            img: require('../assets/icono_urologia.png'),
            title: 'Urología.'
          }
  
        ]
      }
    },    
  }
  </script>


<style>
.vueperslide__content-wrapper{        
        height: 50px !important;
        margin-top: 85px !important;
    }
</style>

  