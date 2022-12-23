<script setup>
import LinerDatePicker from '@/components/ui/inputs/linerDatePicker'
import FlightFilter from '@/components/ui/layout/cards/flight/flightFilter';
import ResultContainer from '@/components/ui/layout/resultContainer';
import { ref } from 'vue';
import ErrorsPopUp from '@/components/ui/templates/errors/errorsPopUp';
import store from '@/store';
import { useRouter } from 'vue-router';
const router = useRouter()
const min = ref(10)
const sec = ref(0)
const dater = ref(true)
const parser = () => {
  if (dater.value) {
    sec.value--
    if (sec.value < 0) {
      sec.value = 59
      min.value--
    }
    if (min.value <= 0 && sec.value <= 0) {
      dater.value = false
    }
  }
}
const timer = () => {
  setInterval(parser, 1000)
}
timer()
const search = () => {
  store.dispatch('fetchFlightOneway')
  min.value=10
  dater.value = true
}
</script>
<template>
  <errors-pop-up :later="sec === 0 && min === 0" title="نهایه وقت البحث" :buttons="[{title:'ابحث مره اخرا' , class:'rounded-md p-[20px] w-[220px]', action:search},{type:'error',title:'عد الی الصفحه الرئیسه' , class:'rounded-md w-[220px]', action:()=>router.push('/flight')}]" type="await" desc="لتحديث الأسعار ورحلات الطيران ، يرجى البحث من البداية."/>
  <div class="mx-auto flex flex-row justify-center gap-5 mt-16 ">
    <flight-filter></flight-filter>
    <div>
      <liner-date-picker></liner-date-picker>
      <result-container></result-container>
    </div>
  </div>
</template>
<style scoped>

</style>
