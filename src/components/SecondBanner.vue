<template>
    <div class="absolute w-full flex-col justify-center -mt-60">
        <p class="text-white font-semibold text-3xl text-center">Lo hacemos más fácil para ti</p>
        <p class="text-center text-white">Medizona es una plataforma que cuenta con las mejores<br> herramientas para mejorar la relación entre doctor y paciente</p>
        <img class="w-3/12 mt-6 m-auto" src="../assets/pleca_colores.png" alt="">
        <div class="flex justify-around mt-12 mb-20 w-full">
            <div class="flex">
                <Circles v-for="(circle, index) in circles" :img="circle.img" :title="circle.text" :subTitle="circle.subtitle" :key="index"/>
            </div>            
        </div>
    </div>
</template>

<script>
import Circles from './Circles.vue';

export default{
    name:'SecondBanner',
    components:{
        Circles        
    },
    data(){
        return{
            circles:[
                {
                    img:require('../assets/icono_especialista.png'),
                    text:'1.- busca un',
                    subtitle:'Espcialista'
                },
                {
                    img:require('../assets/icono_consulta.png'),
                    text:'2.- Agenda tu',
                    subtitle:'Consulta'
                },
                {
                    img:require('../assets/icono_atencion.png'),
                    text:'3.- Obtén',
                    subtitle:'Atención'
                },
                {
                    img:require('../assets/icono_medicamentos.png'),
                    text:'4.- Pide y recibe tus',
                    subtitle:'Medicamentos'
                },
            ]
        }
    }
}
</script>