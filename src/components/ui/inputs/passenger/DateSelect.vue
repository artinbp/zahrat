<script setup>
import { onMounted, ref, defineProps } from 'vue'
import { checkMonth } from '@/utils/func/storeSearch'

const props = defineProps({
  type: {
    default: 'birthday'
  },
  title: {
    default: 'birthday'
  }
})
const date = ref({
  day: new Date().getDay(),
  month: new Date().getMonth(),
  year: new Date().getFullYear()
})
const days = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const years = ref([])
const dayToggle = ref(false)
const monthToggle = ref(false)
const yearToggle = ref(false)
const openDayToggle = () => {
  dayToggle.value =  !dayToggle.value
  closeMonthToggle()
  closeYearToggle()
}
const closeDayToggle = () => {
  dayToggle.value = false
}
const openMonthToggle = () => {
  monthToggle.value = !monthToggle.value
  closeYearToggle()
  closeDayToggle()
}
const closeMonthToggle = () => {
  monthToggle.value = false
}
const openYearToggle = () => {
  yearToggle.value = !yearToggle.value
  closeMonthToggle()
  closeDayToggle()
}
const closeYearToggle = () => {
  yearToggle.value = false
}
const changeYear = (e) => {
  date.value.year = e
  yearToggle.value = false
}
const changeMonth = (e) => {
  date.value.month = e
  monthToggle.value = false
}
const changeDay = (e) => {
  date.value.day = e
  dayToggle.value = false
}
onMounted(() => {
  if (props.type === 'birthday') {
    const yearNum = new Date().getFullYear()
    for (let i = (yearNum - 100); i < yearNum; i++) {
      years.value = [i, ...years.value]
    }
  } else {
    const passDate = new Date()
    passDate.setMonth(passDate.getMonth() + 6)
    for (let i = passDate.getFullYear(); i < (passDate.getFullYear() + 50); i++) {
      years.value = [i, ...years.value]
    }
  }
})
</script>
<template>

  <div
    class="bg-gray-50 flex text-center h-[80px] gap-1 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full">

    <input v-model="date.year" @click="openYearToggle"
           class="w-1/3 rounded-r-xl px-6 hover:bg-gray-100 hover:cursor-pointer active:scale-95">
    <svg class="absolute translate-y-6 -translate-x-[4rem] transition-all" :class="[yearToggle?'rotate-180':'']" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.07992 8.99991L10.5999 15.5199C11.3699 16.2899 12.6299 16.2899 13.3999 15.5199L19.9199 8.99991" stroke="#3D3D3D" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <ul class="absolute border overflow-y-scroll shadow-xl rounded-xl h-[19rem] w-28 z-50 translate-y-[5.2rem] -translate-x-[0rem]"
        v-if="yearToggle">
      <li v-for="(year, i) in years" @click="changeYear(year)" class="bg-white cursor-pointer p-5 text-[14px] hover:bg-gray-100"
          :key="i">{{ year }}
      </li>
    </ul>
    <div @click="openMonthToggle" class="w-1/3 flex flex-row-reverse bg-white items-center justify-between px-6 hover:bg-gray-100 hover:cursor-pointer active:scale-95">
      <svg width="24" height="24" class="transition-all" :class="[monthToggle?'rotate-180':'']" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.07992 8.99991L10.5999 15.5199C11.3699 16.2899 12.6299 16.2899 13.3999 15.5199L19.9199 8.99991" stroke="#3D3D3D" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>{{ checkMonth(date.month,'another','en') }}</span>
    </div>
    <ul class="absolute border -translate-x-[6rem] overflow-y-scroll  shadow-xl rounded-xl h-[19rem] w-28 z-50 translate-y-[5.2rem]"
        v-if="monthToggle">
      <li v-for="(month, i) in months" @click="changeMonth(month)" class="bg-white cursor-pointer p-2 hover:bg-gray-100"
          :key="i">{{ checkMonth(month,'another','en') }}
      </li>
    </ul>
    <div @click="openDayToggle" class="w-1/3 rounded-l-xl flex flex-row-reverse items-center bg-white justify-between px-6 hover:bg-gray-100 hover:cursor-pointer active:scale-95">
      <svg width="24" height="24" class="transition-all" :class="[dayToggle?'rotate-180':'']" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.07992 8.99991L10.5999 15.5199C11.3699 16.2899 12.6299 16.2899 13.3999 15.5199L19.9199 8.99991" stroke="#3D3D3D" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>{{ date.day }}</span>
    </div>
    <ul class="absolute border -translate-x-[12rem] overflow-y-scroll shadow-xl rounded-xl h-[19rem] w-28 z-50 translate-y-[5.2rem]"
        v-if="dayToggle">
      <li v-for="(day, i) in days" @click="changeDay(day)" class="bg-white cursor-pointer p-2 hover:bg-gray-100"
          :key="i">{{ day }}
      </li>
    </ul>
  </div>
</template>
