<template>
    <div class="bg-full flex justify-center pt-5">
        <div class="w-9/12 flex justify-between items-center">
            <img class="w-2/12" src="../assets/logo.png" alt="">
            <a href="#" class="text-blue">Inicio</a>                        
            <a href="#" class="text-blue">¿Quiénes somos?</a>
            <button class="bg-blueLight w-2/12 h-9 pl-3 pr-3 pt-1 pb-1 rounded flex justify-between items-center text-white">
                <p class="text-blue text-sm font-bold">Buscar especialista</p>
            </button>
            <div class="flex">
                <button class="bg-orange mr-3 h-9 pl-3 pr-3 pt-1 pb-1 rounded flex justify-between items-center text-white">
                    <img class="mr-2" src="../assets/01icono_estetoscopio.png" alt="">
                    <p class="text-sm">Soy Doctor</p>
                    <img class="ml-3" src="../assets/triángulo_invertido.png" alt="">
                </button>
                <button class="bg-blue h-9 pl-3 pr-3 pt-1 pb-1 rounded flex justify-between items-center text-white">
                        <img class="mr-2" src="../assets/02icono_paciente.png" alt="">
                        <p class="text-sm">Soy Paciente</p>
                        <img class="ml-3" src="../assets/triángulo_invertido.png" alt="">
                </button>
            </div>                        
        </div>        
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'NavbarComponent',
    components: {
  
    }
  }
  </script>
  