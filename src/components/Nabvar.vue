<template>
    <div class="flex justify-center pt-5 sm:w-full">
        <div class="w-9/12 flex justify-between items-center sm:flex-col sm:w-full">
            <img class="w-2/12 sm:w-4/12" src="../assets/logo.png" alt="">
            <a href="#" class="text-blue">Inicio</a>                        
            <a href="#" class="text-blue sm:mb-3">¿Quiénes somos?</a>
            <button class="bg-blueLight w-2/12 h-9 pl-3 pr-3 pt-1 pb-1 rounded flex justify-between items-center text-white sm:w-6/12 sm:text-center">                
                <p class="text-blue text-sm font-bold sm:w-full">Buscar especialista</p>
            </button>
            <div class="flex sm:mt-3">
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
  