<script setup>
import store from '@/store'
import { profile } from '@/assets/icons/js/light'
import { useI18n } from 'vue-i18n'
import { computed, ref, defineProps } from 'vue'
import PluxIcons from '@/components/ui/templates/PluxIcons'
import PluxPopup from '@/components/ui/layout/PluxPopup'

const { t } = useI18n()
const passengers=computed(() => store.getters.getPassengerCount)
const adults=computed(() => store.getters.getAdultCount)
const children=computed(() => store.getters.getChildCount)
const infants=computed(() => store.getters.getInfantCount)
const popUp = ref(false)
const popUpCloser = () => {
  popUp.value = false
  store.commit('setFlightSearchToggle', 'city')
}
const searchToggle = computed(() => store.getters.getFlightSearchToggle )
defineProps({
  design: {
    type: String
  }
})
</script>
<template>
  <div v-if="!design" @click="popUp = true" class="h-24 flex flex-row w-auto max-w-[252px] min-w-[222px] laptop:max-w-[600px] laptop:min-w-[600px] laptop-mini:max-w-[510px] laptop-mini:min-w-[536px] laptop:grow pr-[16px] grow rounded-2xl bg-[#F3F3F3] cursor-pointer">
    <div class="h-10 w-10 float-left mt-7">
      <button class="w-10 h-10 flex border border-zahrat rounded-full bg-zahrat justify-center items-center">
        <plux-icons :path="profile" size="20" view-box="0 0 24 24" class="w-6 flex bg-zahrat stroke-zahrat-bone shadow-zahrat shadow-xl fill-zahrat justify-center items-center h-6"></plux-icons>
      </button>
    </div>
    <div class="mt-5 mr-3">
      <div class="text-sm font-normal text-fadeFont">{{ t('Customers') }}</div>
      <div class="text-xl mt-2 font-bold text-zahrat-darkgray">{{ passengers }}</div>
    </div>
  </div>
  <div v-if="design === 'searchPage'" @click="popUp = true" class="h-24 w-full min-w-[10rem] p-2 mt-3 grow rounded-2xl bg-[#fff] cursor-pointer">
    <div class="mt-5 mr-3">
      <div class="text-sm font-normal text-fadeFont">{{ t('Customers') }}</div>
      <div class="text-xl mt-2 font-bold text-zahrat-darkgray">{{ passengers }}</div>
    </div>
  </div>
  <plux-popup :popup="popUp || searchToggle === 'passenger'" :close="popUpCloser" class="flex justify-center items-center">
    <ul class="absolute w-[667px] bg-white p-[24px] laptop:scale-75 laptop-mini:scale-75 laptop:translate-y-6 laptop-mini:translate-y-4 flex flex-col gap-[48px] drop-shadow cursor-default z-50 shadow-md shadow-zahrat-gray rounded-md translate-y-8">
      <li class="flex flex-row p-2 justify-between items-center">
        <h1 class="text-[24px]">adult ( 12 years and above )</h1>
        <div class="flex flex-row gap-6 items-center">
          <button class="w-[48px] h-[48px] text-[24px] rounded-md text-zahrat-bone" :class="[adults > 1 ? 'bg-zahrat':'bg-zahrat-rose']" @click="store.commit('delAdult')">-</button>
          <p class="text-[24px]">{{ adults }}</p>
          <button class="w-[48px] h-[48px] text-[24px]  rounded-md text-zahrat-bone" :class="[passengers < 9 ? 'bg-zahrat':'bg-zahrat-rose']" @click="store.commit('addAdult')">+</button>
        </div>
      </li>

      <li class="flex flex-row p-2 justify-between items-center">
        <h1 class="text-[24px]">child ( 2 to 12 years old )</h1>
        <div class="flex flex-row gap-6 items-center">
          <button class="w-[48px] h-[48px] text-[24px] rounded-md text-zahrat-bone" :class="[children > 0 ? 'bg-zahrat':'bg-zahrat-rose']" @click="store.commit('delChild')">-</button>
          <p class="text-[24px]">{{ children }}</p>
          <button class="w-[48px] h-[48px] text-[24px] rounded-md text-zahrat-bone" :class="[passengers < 9 ? 'bg-zahrat':'bg-zahrat-rose']" @click="store.commit('addChild')">+</button>
        </div>
      </li>

      <li class="flex flex-row p-2 justify-between items-center">
        <h1 class="text-[24px]">infant ( 10 to 2 years old )</h1>
        <div class="flex flex-row gap-6 items-center">
          <button class="w-[48px] h-[48px] text-[24px]  rounded-md text-zahrat-bone" :class="[infants > 0 ? 'bg-zahrat':'bg-zahrat-rose']" @click="store.commit('delInfant')">-</button>
          <p class="text-[24px]">{{ infants }}</p>
          <button class="w-[48px] h-[48px] text-[24px] rounded-md text-zahrat-bone" :class="[passengers < 9 ? 'bg-zahrat':'bg-zahrat-rose']" @click="store.commit('addInfant')">+</button>
        </div>
      </li>
      <li class="flex items-center gap-2 mt-2 m-[24px] mt-[48px] justify-center h-10 w-full">
        <button class="w-[124px] h-full bg-zahrat-rose rounded-lg text-sm font-medium text-zahrat" @click="popUpCloser">القاء</button>
        <button
            class="w-[124px] h-full bg-zahrat rounded-lg ml-2 text-sm font-medium text-white" @click="popUpCloser">حسناً</button>

      </li>
    </ul>
  </plux-popup>
</template>
<style scoped>

</style>
