<template>
    <div class="flex-col">        
        <div class="grid grid-cols-7 gap-1">
            <p class="text-center text-blue font-semibold text-sm">Dom</p>
            <p class="text-center text-blue font-semibold text-sm">Lun</p>
            <p class="text-center text-blue font-semibold text-sm">Mar</p>
            <p class="text-center text-blue font-semibold text-sm">Mi</p>
            <p class="text-center text-blue font-semibold text-sm">Jue</p>
            <p class="text-center text-blue font-semibold text-sm">Vie</p>
            <p class="text-center text-blue font-semibold text-sm">Sab</p>
        </div>
        <div class="grid grid-cols-7 grid-rows-5 gap-1">
            <span class="text-center text-blue" v-for="(day, index) in daysOfCalendar" :key="index">
                <p>{{day}}</p>
            </span>        
        </div>
    </div>
</template>


<script>
import moment from 'moment';
export default{
    name:'CalendarComponent',
    data(){
        return{
            daysOfCalendar:[],
        }
    },
    mounted(){
        this.getDays();     
    },

    methods:{
        getDays(){
            let daysArray = [];
            let firstDay = moment().clone().startOf('month');           
            let lastDay   = moment().clone().endOf('month');

            while (firstDay.day() !== 1) {
                firstDay.subtract(1, 'days');
            }

            while (lastDay.day() !== 0) {
                lastDay.add(1, 'days')
            }

            do{                
                console.log(firstDay.format('DD-MM-YY'));
                daysArray.push(firstDay.format('DD'));
                firstDay.add(1, 'days');                
            }while(firstDay.isSameOrBefore(lastDay))

            this.daysOfCalendar = daysArray;
            
                                 
        }
    }
}
</script>