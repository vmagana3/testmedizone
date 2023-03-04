<template>
    <div class="w-11/12 flex flex-col justify-center items-center p-3 rounded-xl shadow-2xl mb-10 bg-white" :style="{boxShadow:'0px 0px 40px -20px gray'}">
        <div class="flex justify-evenly w-2/12 sm:w-full">
            <img src="../assets/calendar.png" alt="" class="">
            <p class="text-xl text-gray-600">Agenda tu cita</p>
        </div>        
        <div class="flex w-full sm:flex-col">
            <div class="flex-col w-5/12 p-4 sm:w-full border-r border-gray-300">
                <div class="flex justify-between items-center w-full sm:flex-col sm:items-center">
                    <p class="text-gray-500 font-semibold text-sm">Tipo de consulta</p>
                    <button class="border border-gray-400 p-3 text-sm rounded-xl text-gray-500 font-semibold sm:w-5/12 sm:mt-2">En línea</button>
                    <button class="border border-gray-400 p-3 text-sm rounded-xl text-gray-500 font-semibold sm:w-5/12 sm:mt-2">Presencial</button>
                    <button class="border border-gray-400 p-3 text-sm rounded-xl text-gray-500 font-semibold sm:w-5/12 sm:mt-2">A domicilio</button>
                </div>           
                <div class="w-full mt-4">
                    <select name="" id="" class="pl-2 w-full bg-transparent rounded border text-gray-500 h-10 border-gray-400 font-semibold sm:text-xs">
                        <option value="">Especialidad o subespecialidad</option>
                    </select>
                </div>
                <div class="w-full mt-4">
                    <input type="text" class="pl-2 w-full bg-transparent rounded border h-10 border-gray-400 font-semibold sm:text-xs" placeholder="Nombre del médico, clínica o especialidad">                    
                </div>     
            </div>
            <div class="w-3/12 p-4 border-r border-gray-300 sm:w-full">
                <select name="" id="" class="mt-1 pl-2 w-full bg-transparent rounded border text-gray-500 h-10 border-gray-400 font-semibold sm:text-xs" placeholder="Estado">
                    <option value="">Estado</option>
                </select>
                <select name="" id="" class="mt-4 pl-2 w-full bg-transparent rounded border text-gray-500 h-10 border-gray-400 font-semibold sm:text-xs" placeholder="Ciudad">
                    <option value="">Ciudad</option>
                </select>
                <input type="text" class="mt-4 w-full pl-2 bg-transparent rounded border h-10 border-gray-400 font-semibold sm:text-xs" placeholder="Código postal">                    
            </div>
            <div class="w-3/12 p-4 sm:w-full">
                <div class="flex justify-around items-center mb-3">
                    <p class="text-gray-500 text-sm">Fecha de consulta</p>                                           
                    <select name="" id="" class="text-sm pl-2 pt-1 pb-1 pr-3 border border-gray-400 rounded w-6/12">
                        <option value="">Agosto</option>                        
                    </select>                  
                </div>                 
                <CalendarComponent/>                
            </div>            
        </div>
        <div class="border-2 border-blue rounded w-6/12 flex justify-center items-center mb-5 mt-5 sm:w-full">
            <img src="../assets/busqueda.png" alt="" class="mr-2">
            <p class="text-2xl text-blue">Buscar especialista</p>
        </div>
    </div>
  </template>
  
  <script>
  import CalendarComponent from './Calendar.vue';
  export default {
    name: 'AgendaCardComponent',
    components: {   
        CalendarComponent,
    },    
  }
  </script>
