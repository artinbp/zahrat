<script setup>
import { ref, onMounted, computed } from 'vue'
import DateCard from '@/components/ui/templates/dateCard'
// import jDate from "jalali-date"
import store from '@/store/'
// const { locale } = useI18n()
const firstIndex = ref(0)
const limit = 4

onMounted(() => {
  store.commit('setDays')
})
store.commit("setDays")
const year = computed(() => store.getters.getYear)
const month = computed(() => store.getters.getMonth)
const day = computed(() => store.getters.getDay)
const days = computed(() => store.getters.getdays)
function setDays (date) {
store.commit('setDate', { year: new Date(date.date).getFullYear(), month: new Date(date.date).getMonth(), day: new Date(date.date).getDate() })
   store.dispatch('fetchFlightOneway')
  // store.commit("setDays")

}
function previous()
{
  if (firstIndex.value > 0) {
    firstIndex.value--
  }
}
const getMax = (arr) => {
  return Math.max(...arr.map((item)=>item.price))
}
const getMin = (arr) => {
  return Math.min(...arr.map((item)=>item.price))
}
function next()
{
  if (firstIndex.value < days.value.length - (limit+1)){
    firstIndex.value++
  }
}

</script>

<template>
  <div class="w-[900px] h-32 bg-[#FAFAFA] rounded-2xl flex flex-row-reverse justify-between">
    <div class="mt-4 flex justify-center items-center relative h-24 min-w-[3.5rem] after:h-full after:w-[0.188rem] after:bg-[#EEEEEE] after:block after:absolute after:top-0 after:right-0 after:rounded-full cursor-pointer"
         @click.prevent="next">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M20.0004 26.5599L11.3071 17.8666C10.2804 16.8399 10.2804 15.1599 11.3071 14.1333L20.0004 5.43994"
            stroke="#3D3D3D" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
      </svg>

    </div>

    <div class="flex items-center">
      <date-card v-for="(item, index) in days"
                 :key="index"
                 class="transition-all duration-500"
                 :date="item.date.toString()"
                 :price="item.price.toString()"
                 :priceColor="((getMin(days) === item.price) ? 'text-[#41CA00]' : (getMax(days) === item.price) ? 'text-[#FF6B00]' : 'text-[#3D3D3D]')"
                 :class="((firstIndex + limit < index || firstIndex > index) ? 'w-0 mx-none opacity-0 ' : ((year === new Date(item.date).getFullYear()&&month === new Date(item.date).getMonth()&&day === new Date(item.date).getDate()) ? 'bg-[#FFFFFF] mx-6 w-[8.313rem]' : 'mx-3 w-[8.313rem]'))"
                 @click="setDays(item)">
      </date-card>
    </div>

    <div class="mt-4 flex justify-center items-center relative h-24 min-w-[3.5rem] after:h-full after:w-[0.188rem] after:bg-[#EEEEEE] after:block after:absolute after:top-0 after:left-0 after:rounded-full cursor-pointer"
         @click.prevent="previous">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M11.9996 26.5599L20.6929 17.8666C21.7196 16.8399 21.7196 15.1599 20.6929 14.1333L11.9996 5.43994"
            stroke="#3D3D3D" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
      </svg>
    </div>
  </div>

</template>
