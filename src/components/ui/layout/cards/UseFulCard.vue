<script setup>

import PluxButton from '@/components/ui/inputs/PluxButton';
import { defineProps, ref } from 'vue';
import {checkCity,setWeek} from '@/utils/func/storeSearch';
import PluxPopup from '@/components/ui/layout/PluxPopup';
import {xMark, reverse, leftArrowLiner} from '@/assets/icons/js/light';
import PluxIcons from '@/components/ui/templates/PluxIcons';
const tripCosts = {
  origin: 'AAN',
  destination: 'DXBALL',
  travels: [
    {
      date: '2022-05-20',
      emptyChears: 4,
      price: 500
    }, {
      date: '2022-05-21',
      emptyChears: 4,
      price: 4000
    }, {
      date: '2022-05-22',
      emptyChears: 4,
      price: 5000
    }, {
      date: '2022-05-23',
      emptyChears: 4,
      price: 4000
    }, {
      date: '2022-05-24',
      emptyChears: 4,
      price: 4000
    }, {
      date: '2022-05-25',
      emptyChears: 4,
      price: 4000
    }, {
      date: '2022-05-26',
      emptyChears: 4,
      price: 3000
    }, {
      date: '2022-05-27',
      emptyChears: 4,
      price: 4000
    }, {
      date: '2022-05-28',
      emptyChears: 4,
      price: 4000
    }, {
      date: '2022-05-29',
      emptyChears: 4,
      price: 4562
    }, {
      date: '2022-05-30',
      emptyChears: 4,
      price: 40200
    }, {
      date: '2022-05-31',
      emptyChears: 4,
      price: 20000
    }, {
      date: '2022-06-01',
      emptyChears: 4,
      price: 10
    }, {
      date: '2022-06-02',
      emptyChears: 4,
      price: 4000
    }, {
      date: '2022-06-03',
      emptyChears: 4,
      price: 4000
    }
  ]
}
const popup = ref(false)
defineProps({
  cities:{
    type:Object
  }
})
const action = () => {
  console.log(2)
}
const setTravelWay = (origin,destination) => {
  console.log(origin,destination)
  popup.value = true
}
const closer = () => {
  popup.value = false
}
const getMax = (arr) => {
  return Math.max(...arr.map((item)=>item.price))
}
const getMin = (arr) => {
  return Math.min(...arr.map((item)=>item.price))
}
const searchTravel = (origin,destination,date) => {
  console.log(origin,destination,new Date(date))
  popup.value = false
}
const USDType = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
</script>
<template>
  <div class="h-auto p-2 bg-zahrat-bone rounded-2xl">
    <div class="mt-6 ml-4  text-blackFont text-[24px] font-bold">{{ checkCity(cities.origin,'ar') }}</div>
    <ul class="list-none mt-6 py-2 space-y-2">
      <li v-for="(city, i) in cities.travels" @click="setTravelWay(cities.origin,city.destination)" :key="i">
        <a class="mx-auto  w-full bg-white cursor-pointer rounded-md block">
          <div class="bg-whiteC px-4 h-14 rounded-lg flex items-center justify-between">
            <span class="text-[16px] px-2 text-base font-medium w-28 truncate">{{ checkCity(city.destination,'ar') }}</span>
            <span class="text-[16px] font-semibold text-[#777777] px-2 text-base font-medium w-28 truncate text-left"
                  :class="`${getMin(cities.travels) === city.price ?'text-zahrat-green':'text-zahrat-slate'} ${getMax(cities.travels) === city.price ?'text-zahrat-orange':''}`">
              {{ USDType.format(city.price) }}
            </span>
          </div>
        </a>
      </li>
    </ul>
  </div>
  <plux-popup class="flex items-center justify-center" :close="closer" :popup="popup">
    <div class="z-50 bg-white w-[760px] p-[32px] rounded-[16px]">
      <div class="flex flex-row justify-between mb-14 items-center">
        <div class="flex flex-row items-center justify-center gap-4">
          <button @click="closer" class="text-3xl w-[40px] h-[40px] rounded-full bg-zahrat-bone flex flex-row items-center justify-center">
            <plux-icons :path="xMark" view-box="0 0 29 29" size="28px"></plux-icons>
          </button>
          <p class="text-[24px] font-semibold text-zahrat-darkgray">
            {{ `${checkCity(tripCosts.origin)} ألئ ${checkCity(tripCosts.destination)}` }}
          </p>
        </div>
        <PluxButton type="await" @action="action">الاتجاه العكسي <plux-icons :path="reverse" size="20" view-box="-2 -2 24 24"  class="w-6 flex justify-center items-center h-6"></plux-icons>
        </PluxButton>
      </div>
      <div class="grid grid-cols-5 text-center">
        <div v-for="(item, i) in tripCosts.travels" :key="i" class="p-3 cursor-pointer" @click="searchTravel(tripCosts.origin, tripCosts.destination, tripCosts.travels[i].date)">
          <p class="flex flex-row justify-between gap-4 items-center text-zahrat-slate">
            <span>{{ setWeek(new Date(item.date.split('-')).getDay()) }}</span>
            <span>{{ item.date.split('-').slice(1,3).join('/') }}</span>
          </p>
          <p class="text-[16px] py-[12px] px-[16px] font-semibold bg-zahrat-bone rounded-sm" :class="`${getMin(tripCosts.travels) === item.price ?'text-zahrat-green':'text-zahrat-slate'} ${getMax(tripCosts.travels) === item.price ?'text-zahrat-orange':''}`">
            {{ USDType.format(item.price) }}
          </p>
        </div>
      </div>
      <div class="w-full flex flex-row gap-[40px] justify-center">
        <plux-button type="liner" class="stroke-zahrat hover:stroke-zahrat-bone justify-center flex flex-row items-center"><plux-icons :path="leftArrowLiner" class="rotate-180"></plux-icons>  بعد 15 یوماً </plux-button>
        <plux-button type="liner" class="stroke-zahrat hover:stroke-zahrat-bone justify-center flex flex-row items-center"> قبل 15 یوماً<plux-icons :path="leftArrowLiner" ></plux-icons></plux-button>
      </div>
    </div>
  </plux-popup>
</template>
<style scoped>
*{
  user-select: none;
}
</style>
