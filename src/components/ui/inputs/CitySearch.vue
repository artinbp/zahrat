<script setup>
import airports from '@/utils/datas/airport.json'
import PluxPopup from '@/components/ui/layout/PluxPopup.vue'
import PluxIcon from '@/components/ui/templates/PluxIcons.vue'
import { landingAirplane, reverse, takeoffAirplane } from '@/assets/icons/js/light';
import {checkCity} from '@/utils/func/storeSearch';
import store from '@/store';
import { defineProps, onMounted, ref } from 'vue';

const closePopup = () => {
  store.commit('setFlightSearchToggle', 'calender')
  store.commit('setCityPopup', false)
}
const closeCanselPopup = () => {
  store.commit('setCityPopup', false)
  originValue.value = originTempValue.value
  destinationValue.value = destinationTempValue.value
}
const openPopup = () => {
  originTempValue.value = originValue.value
  destinationTempValue.value = destinationValue.value
  store.commit('setCityPopup', true)
}
const originFocus = () => {
  type.value = 'origin'
  originInputTitle.value = true
}
const destinationFocus = () => {
  type.value = 'destination'
  destinationInputTitle.value = true
}
const originBlur = () => {
  if (originInput.value.value.length === 0) originInputTitle.value = false
}
const destinationBlur = () => {
  if (destinationInput.value.value.length === 0) destinationInputTitle.value = false
}
const originInput = ref()
const destinationInput = ref()
const originValue = ref()
const destinationValue = ref()
const originTempValue = ref()
const destinationTempValue = ref()
const originTempCode = ref()
const destinationTempCode = ref()
const originInputTitle = ref(false)
const destinationInputTitle = ref(false)
const type = ref('origin')
const value = ref()
const obj = [
    {
  DepartureCode: 'DXBALL',
  DepartureCityEn: 'Dubai',
  DepartureCityFa: 'دبی',
  AirportFa: 'همه فرودگاهها دبی',
  AirportEn: 'All Airpots Dubai',
  CountryFa: 'امارات متحده عربی',
  CountryEn: 'United Arab Emirates',
  Column8: null,
  AirportAR: 'دبى, الإمارات العربية المتحدة - مطار دبي الدولي'
}, {
  DepartureCode: 'NJF',
  DepartureCityEn: 'Al Najaf',
  DepartureCityFa: 'آل نجف',
  AirportFa: 'فرودگاه ال نجف',
  AirportEn: 'Al Najaf  Airport',
  CountryFa: 'عراق',
  CountryEn: 'Iraq',
  Column8: null,
  AirportAR: 'النجف , العراق - مطار النجف الدولي'
}, {
  DepartureCode: 'BGW',
  DepartureCityEn: 'Baghdad',
  DepartureCityFa: 'بغداد',
  AirportFa: 'فرودگاه بغداد',
  AirportEn: 'Baghdad  Airport',
  CountryFa: 'عراق',
  CountryEn: 'Iraq',
  Column8: null,
  AirportAR: 'بغداد, العراق - مطار بغداد الدولي'
}, {
  DepartureCode: 'MHD',
  DepartureCityEn: 'Mashhad',
  DepartureCityFa: 'مشهد',
  AirportFa: 'فرودگاه مشهد',
  AirportEn: 'Mashhad  Airport',
  CountryFa: 'ایران',
  CountryEn: 'Iran',
  Column8: null,
  AirportAR: 'مشهد, إيران - مطار مشهد الدولي '
}, {
  DepartureCode: 'IKA',
  DepartureCityEn: 'Tehran',
  DepartureCityFa: 'تهران',
  AirportFa: 'فرودگاه امام خمینی',
  AirportEn: 'Imam Khomeini  Airport',
  CountryFa: 'ایران',
  CountryEn: 'Iran',
  Column8: null,
  AirportAR: 'طهران, إيران - مطار الإمام الخميني'
}]
const cities = ref(obj)
onMounted(() => {
   originValue.value = checkCity(store.getters.getorigin)
   destinationValue.value = checkCity(store.getters.getdestination)
})
const setValOrigin = () => {
  const res = airports.filter((item) => {
    return item.DepartureCityEn.toLowerCase().includes(originValue.value.toLowerCase()) || item.DepartureCityFa.includes(originValue.value.toLowerCase()) || item.DepartureCode?.toLowerCase().includes(originValue.value.toLowerCase())
  })
  cities.value = res.slice(0, 5)
  if (!originInput.value) {
    cities.value = obj
  }
  originInput.value.focus()
  type.value = 'origin'
}
const setValDestination = () => {
  const res = airports.filter((item) => {
    return item.DepartureCityEn.toLowerCase().includes(destinationValue.value.toLowerCase()) || item.DepartureCityFa.includes(destinationValue.value.toLowerCase()) || item.DepartureCode?.toLowerCase().includes(destinationValue.value.toLowerCase())
  })
  cities.value = res.slice(0, 5)
  if (!destinationInput.value) {
    cities.value = obj
  }
  destinationInput.value.focus()
  type.value = 'destination'
}
const giveDataDestination = (e) => {
  value.value = e
  const search = airports.filter((item) => {
    return item.DepartureCode === value.value
  })
  if (search.length > 0) {
    destinationValue.value = search[0].AirportAR.split('-')[0].split(',')[0]
    if (destinationInput.value) {
      destinationTempCode.value = search[0].DepartureCode
      store.commit('setDestination', search[0].DepartureCode)
    }
  }
}
const giveDataOrigin = (e) => {
  value.value = e
  console.log(e)
  const search = airports.filter((item) => {
    return item.DepartureCode === value.value
  })
  if (search.length > 0) {
    originValue.value = search[0].AirportAR.split('-')[0].split(',')[0]
    if (originInput.value) {
      originTempCode.value = search[0].DepartureCode
      store.commit('setOrigin', search[0].DepartureCode)
    }
  }
  if (!destinationValue.value) type.value = 'destination'
}
const setCity = (e) => {
  type.value === 'origin' ? giveDataOrigin(e) : giveDataDestination(e)
}
const reverseCity = () => {
  [originValue.value, destinationValue.value] = [destinationValue.value, originValue.value];
  store.commit('setRevers')
}
const props = defineProps({
  type: {
    default: 'row'
  }
})
</script>
<template>
  <div v-if="props.type === 'row'" class="h-24 flex flex-row w-auto gap-[5px]">
    <div
        @click="openPopup"
        id="lead"
        class="h-24 tablet-large:h-16 w-[266px] laptop:w-[296px] laptop-mini:w-[266px] bg-[#F3F3F3] flex flex-row border-l-0 float-right rounded-r-2xl cursor-pointer">
      <div
          class="h-10 w-10 mr-3 float-right mt-7"
      >
        <button
            class="w-10 h-10 flex justify-center items-center"
            :class="originValue ? 'border border-zahrat rounded-full bg-zahrat':'border border-zahrat-gray rounded-full bg-[#fafafa]'"
        >
          <PluxIcon
              :path="takeoffAirplane"
              size="20"
              view-box="0 0 24 24"
              style="transform:scaleX(-1);"
              class="w-6 flex justify-center items-center h-6"
              :class="originValue ? 'bg-zahrat stroke-zahrat-bone shadow-zahrat shadow-xl fill-zahrat':'bg-[#fafafa] stroke-zahrat-darkgray shadow-xl fill-white'"></PluxIcon>
        </button>
      </div>
      <div class="mt-5 mr-4 text-right w-auto">
        <div class="text-sm font-normal text-zahrat-gray text-right ">الوجهة (مدينة)</div>
        <h1 @click="openPopup"
            class="text-lg text-right focus:outline-0 mt-2 w-1/2 font-semibold text-blackFont">
          {{ originValue ? originValue : '' }} <span v-if="!originValue" class="text-zahrat-gray">النجف</span></h1>
      </div>
    </div>
    <div
        @click="openPopup"
        class="h-24 border-box flex flex-row pl-7 w-[264px] laptop:w-[296px] laptop-mini:w-[266px] bg-[#F3F3F3] float-left rounded-l-2xl cursor-pointer">
      <div class="h-10 float-right mr-6 mt-7">
        <button class="w-10 h-10 flex justify-center items-center"
                :class="destinationValue ? 'border border-zahrat rounded-full bg-zahrat':'border border-zahrat-gray rounded-full bg-[#fafafa]'">
          <PluxIcon :path="landingAirplane" size="20" view-box="0 0 24 24" style="transform:scaleX(-1);"
                    class="w-6 flex justify-center items-center h-6"
                    :class="destinationValue ? 'bg-zahrat stroke-zahrat-bone shadow-zahrat shadow-xl fill-zahrat':'bg-[#fafafa] stroke-zahrat-darkgray shadow-xl fill-zahrat-bone'"></PluxIcon>
        </button>
      </div>
      <div class="mt-5 mr-4 w-auto">
        <div class="text-sm text-zahrat-gray font-normal text-fadeFont">العودة (مدينة)</div>
        <h1 @click="openPopup" class="text-lg focus:outline-0 mt-2 w-1/2 font-semibold text-blackFont">
          {{ destinationValue ? destinationValue : '' }} <span v-if="!destinationValue"
                                                               class="text-zahrat-gray">الطهران</span></h1>
      </div>
    </div>
    <div
        class="absolute w-10 h-10 mt-7 cursor-pointer right-[258px] laptop:right-[304px] laptop-mini:right-[266px] cursor-pointer">
      <button @click="reverseCity"
              class="w-10 h-10 flex border border-zahrat-gray rounded-full bg-[#fafafa] justify-center items-center">
        <PluxIcon :path="reverse" size="20" view-box="-2 -2 24 24"
                  class="w-6 stroke-zahrat-darkgray flex justify-center items-center h-6"></PluxIcon>
      </button>
    </div>
  </div>
  <div v-if="props.type === 'col'" class="flex flex-col w-full mt-4 gap-3 ">
    <div
        @click="openPopup"
        id="deal"
        class=" tablet-large:h-16 bg-[#fff] flex flex-row border-l-0 float-right p-2 rounded-2xl cursor-pointer">
      <div class="mt-5 mr-4 w-full">
        <div class="text-sm font-normal text-fadeFont">الوجهة (مدينة)</div>
        <h1 @click="openPopup"
            class="text-lg focus:outline-0 mt-2 w-1/2 font-semibold text-blackFont">
          {{ originValue ? originValue : '' }} <span v-if="!originValue" class="text-zahrat-gray">النجف</span></h1>
      </div>
    </div>
    <div
        @click="openPopup"
        class="h-24 border-box flex flex-row pl-7 w-full bg-[#fff] float-left rounded-2xl cursor-pointer">
      <div class="mt-5 mr-4 w-full">
        <div class="text-sm font-normal text-fadeFont">العودة (مدينة)</div>
        <h1 @click="openPopup" class="text-lg focus:outline-0 mt-2 w-1/2 font-semibold text-blackFont">
          {{ destinationValue ? destinationValue : '' }}
          <span
              v-if="!destinationValue"
              class="text-zahrat-gray"
          >
            الطهران
          </span>
        </h1>
      </div>
    </div>
    <div
        class="absolute w-16 h-16 mt-[3.8rem] rotate-90 cursor-pointer -translate-x-[15rem] cursor-pointer">
      <button @click="reverseCity"
              class="w-10 h-10 flex border border-zahrat-gray rounded-full bg-zahrat-lightgray justify-center items-center">
        <PluxIcon :path="reverse" size="20" view-box="-2 -2 24 24"
                  class="w-6 stroke-zahrat-darkgray flex justify-center items-center h-6"></PluxIcon>
      </button>
    </div>
  </div>
  <plux-popup :popup="store.getters.getCityPopup" :close="closeCanselPopup">
    <div class="tripCostsPop">
      <div
          class="w-full h-14 bg-zahrat-bone  flex flex-row gap-4 mx-auto rounded-t-lg border-b-2 border-b-zahrat-lightgray">
        <PluxIcon :path="takeoffAirplane" size="20" view-box="0 0 24 24" style="transform:scaleX(-1);"
                  class="w-6 stroke-zahrat-darkgray float-left mr-6 mt-4"></PluxIcon>
        <input type="text" autocomplete="off" id="originPop" v-model="originValue" @keyup="setValOrigin"
               @blur="originBlur"
               @focus="originFocus" ref="originInput" size="34" placeholder="الاصل"
               class="float-left w-full m-4 text-lg font-bold text-blackFont placeholder-borderCCC mt-[14px] focus:outline-none bg-transparent">
      </div>
      <div class="w-full h-14 bg-zahrat-bone flex flex-row gap-4 justify-between items-center mx-auto rounded-b-lg">
        <PluxIcon :path="landingAirplane" size="20" view-box="0 0 24 24" style="transform:scaleX(-1);"
                  class="w-6 stroke-zahrat-darkgray float-left mr-6 mt-4"></PluxIcon>
        <input
            type="text" id="destinationPop" v-model="destinationValue" @keyup="setValDestination"
            @blur="destinationBlur" autocomplete="off" ref="destinationInput" @focus="destinationFocus" size="34"
            placeholder="الوجهة"
            class="float-left w-full m-4 text-lg font-bold text-blackFont placeholder-borderCCC mt-[14px] focus:outline-none bg-transparent">
      </div>
      <div @click="reverseCity"
           class="h-10 float-right w-10 bg-[#eee] border-zahrat-gray rounded-full border-2 flex f mr-[37rem] -mt-[78px] cursor-pointer ">
        <plux-icon class="block text-center stroke-zahrat-darkgray m-auto rotate-90" view-box="-2 -2 25 25"
                   :path="reverse" size="30"></plux-icon>
      </div>
      <div class="ml-14 mt-[4rem] text-xl font-bold text-blackFont">حاصل</div>
      <ul class="h-[364px] w-full mx-auto list-none no-scrollbar overflow-scroll ">
        <li v-for="(city, i) in cities" :key="i" @click="setCity(city.DepartureCode)"
            class="h-14 flex flex-row-reverse justify-between items-center w-full bg-transparent rounded-lg hover:bg-cardC cursor-pointer">
          <div class="text-[#888]">

            {{ city.AirportAR.split(',')[1].split('-')[1] }}

          </div>
          <div class="flex flex-row-reverse gap-2 items-center">
                <span class="float-left ml-2 text-md font-medium text-zahrat-darkgray mt-[14px]">
              {{ city.AirportAR.split(',')[0] }},{{ city.AirportAR.split('-')[0].split(',')[1] }}
                   </span>
            <plux-icon :path="takeoffAirplane" v-if="type === 'origin'" size="40"
                       class="w-8 float-left stroke-zahrat-darkgray mr-[18px] mt-4"
                       style="transform:scaleX(-1);"></plux-icon>
            <plux-icon :path="landingAirplane" v-if="type === 'destination'" size="40"
                       class="w-8 float-left stroke-zahrat-darkgray mr-[18px] mt-4"
                       style="transform:scaleX(-1);"></plux-icon>
          </div>
        </li>

      </ul>
      <div class="flex items-center gap-2 mt-2 justify-center h-10 w-full">
        <button class="w-[124px] h-full bg-zahrat-rose rounded-lg text-sm font-medium text-zahrat"
                @click="closeCanselPopup">القاء
        </button>
        <button
            class="w-[124px] h-full bg-zahrat rounded-lg ml-2 text-sm font-medium text-white" @click="closePopup">حسناً
        </button>
      </div>
    </div>
  </plux-popup>
</template>
<style lang="scss" scoped>
* {
  user-select: none;
}
.tripCostsPop {
  @apply relative flex flex-col laptop:scale-75 laptop-mini:scale-75  fixed px-[2rem] py-[2rem] bg-white w-[725px] shadow-slate-800 shadow-sm  h-fit my-10 z-50 rounded-md mx-auto laptop:my-[0px] laptop-mini:my-[-58px] p-1;
}

input {
  :focus {
    @apply ring-0 outline-0;
    outline: none;
  }
}
</style>
