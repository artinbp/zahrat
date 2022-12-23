<script setup>
import { computed, ref } from 'vue';
import store from '@/store';

import CitySearch from '@/components/ui/inputs/CitySearch';
import PluxCalender from '@/components/ui/inputs/PluxCalender';
import AddPassengar from '@/components/ui/inputs/addPassengar';

const date = computed(() => store.getters.getDay)
const flightType = ref('oneway')
console.log(date)
store.dispatch('loginUser')
const search = () => {
  store.dispatch('loginUser').then(()=>store.dispatch('fetchFlightOneway'))
}
</script>
<template>
  <div class="bg-[#FAFAFA] rounded-2xl px-4 py-6 max-w-[32.5rem]">
    <div class="flex flex-row gap-[40px] w-full h-10">
      <div class="flex flex-row gap-2 items-center">
        <input v-model="flightType" type="radio" id="oneway" value="oneway" name="typeTrip"
               class="checked:accent-zahrat w-[20px] h-[20px]" checked>
        <label for="oneway" class="text-[18px]">ذهاب</label>
      </div>
      <div class="flex flex-row gap-2 items-center">
        <input v-model="flightType" type="radio" id="roundTrip" value="roundTrip" name="typeTrip"
               class=" checked:accent-zahrat w-[20px] h-[20px]">
        <label for="roundTrip" class="text-[18px]"> ذهاب و عودة</label>
      </div>
    </div>
    <div v-if="flightType === 'oneway'">
      <city-search type="col"></city-search>
      <plux-calender type="oneway" design="searchPage"></plux-calender>
      <add-passengar design="searchPage" class="w-full"></add-passengar>
      <div @click="search" class="h-20 flex justify-center items-center bg-[#C02320] active:scale-95 rounded-2xl mt-6 gap-4 cursor-pointer">
          <span
              class="text-xl font-medium text-[#FFFFFF] decoration-0">البحث</span>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M15.3337 28.0001C22.3293 28.0001 28.0003 22.329 28.0003 15.3334C28.0003 8.33781 22.3293 2.66675 15.3337 2.66675C8.33805 2.66675 2.66699 8.33781 2.66699 15.3334C2.66699 22.329 8.33805 28.0001 15.3337 28.0001Z"
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M29.3337 29.3334L26.667 26.6667" stroke="white" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"></path>
        </svg>
      </div>
    </div>
    <div v-if="flightType === 'roundTrip'">
      <city-search type="col"></city-search>
      <plux-calender  type="return" design="searchPage"></plux-calender>
      <add-passengar design="searchPage" class="w-full"></add-passengar>
      <div @click="search" class="h-20 flex justify-center items-center bg-[#C02320] active:scale-95 rounded-2xl mt-6 gap-4 cursor-pointer">
          <span
              class="text-xl font-medium text-[#FFFFFF] decoration-0">البحث</span>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M15.3337 28.0001C22.3293 28.0001 28.0003 22.329 28.0003 15.3334C28.0003 8.33781 22.3293 2.66675 15.3337 2.66675C8.33805 2.66675 2.66699 8.33781 2.66699 15.3334C2.66699 22.329 8.33805 28.0001 15.3337 28.0001Z"
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M29.3337 29.3334L26.667 26.6667" stroke="white" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"></path>
        </svg>
      </div>
    </div>

  </div>
</template>
<style scoped>

</style>
