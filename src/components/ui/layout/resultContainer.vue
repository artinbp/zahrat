<script setup>
import SortButton from '@/components/ui/inputs/SortSelect';
import { computed } from 'vue';
import { checkCity, setDateCurrect } from '@/utils/func/storeSearch';
import store from '@/store';
import SingleFlightLoading from '@/components/ui/layout/cards/flight/singleFlightLoading';
import SingleFlight from '@/components/ui/layout/cards/flight/singleFlight';

const origin = computed(() => store.getters.getorigin)
const destination = computed(() => store.getters.getdestination)
const day = computed(() => store.getters.getDay)
const month = computed(() => store.getters.getMonth)
const year = computed(() => store.getters.getYear)
const error = computed(() => store.getters.getFlightSearchError)
const resultList = computed(() => store.getters.getFlightSearchTicketTemp)
</script>
<template>
  <div class="w-[58.5rem] bg-[#FAFAFA] rounded-2xl mt-6 p-6">
    <div class="float-right mb-2 flex flex-row-reverse items-center gap-8">
      <span class="font-arabicKufi text-[1.375rem] font-bold text-[#3D3D3D] leading-[3.335rem]">{{
          checkCity(destination)
        }}</span>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M17.7166 33.4167L14.3666 25.6333L13.6333 23.9C13.4999 23.6334 13.1499 23.4 12.8499 23.4H7.74994C6.14994 23.4 4.24993 22.2167 3.5166 20.7833C3.2666 20.2833 3.2666 19.6834 3.5166 19.1834C4.24993 17.7667 6.1666 16.5833 7.7666 16.5833H12.8666C13.1666 16.5833 13.5166 16.35 13.6499 16.0833L17.7333 6.58335C18.1666 5.53335 19.4833 4.68335 20.6166 4.68335H22.8166C24.2333 4.68335 24.9333 5.75002 24.3666 7.06668L20.7666 15.4167C20.4833 16.0667 20.8333 16.6 21.5499 16.6H23.3999H26.3999C26.7833 16.6 27.3333 16.3833 27.5999 16.1167L31.4833 12.25C31.8833 11.85 32.6666 11.6667 33.2333 11.85L35.4999 12.6C36.4833 12.9 36.9499 14.0167 36.4833 14.9333L33.1499 18.9C32.6333 19.5 32.6333 20.4833 33.1499 21.0833L36.4833 25.05C36.9333 25.9667 36.4833 27.0834 35.4999 27.4167L33.2333 28.1667C32.6833 28.35 31.8833 28.1667 31.4833 27.7667L27.5999 23.9C27.3333 23.6167 26.7833 23.4 26.3999 23.4H21.5499C20.8333 23.4 20.4999 23.9167 20.7666 24.5833L24.3666 32.9333C24.9333 34.25 24.2333 35.3167 22.8166 35.3167H20.6166C19.4833 35.3167 18.1666 34.4667 17.7166 33.4167Z"
            fill="#3D3D3D"/>
      </svg>
      <span class=" font-arabicKufi text-[1.375rem] font-bold text-[#3D3D3D] leading-[3.335rem]">{{
          checkCity(origin)
        }}</span>
    </div>
    <sort-button class="float-left mt-2"></sort-button>
    <div class="clear-both text-right text-base font-normal leading-[1.906rem] text-[#3D3D3D]">
      {{ setDateCurrect([year, month, day]).split(' ').slice(0, 4).join(' ') }}
    </div>
    <ul v-if="error.status && error.type === 'loading'" class="mt-8 space-y-6">
      <li v-for="(item, index) in 5" :key="index">
        <single-flight-loading></single-flight-loading>
      </li>
    </ul>
    <ul v-if="error.status && error.type === 'error'" class="mt-8 space-y-6">
      <error-component :desc="error.desc" :title="error.title" :code="error.code"></error-component>
    </ul>
    <ul v-if="!error.status " class="mt-8 space-y-6">
      <li v-for="(item, index) in resultList" :key="index">
        <single-flight :info="item"></single-flight>
      </li>
    </ul>
    <div class="text-base font-medium mt-14 mb-8 text-center text-[rgba(61,61,61,0.8)]">
      !شما به انتهای لیست رسیدید
    </div>
  </div>

</template>
<style scoped>

</style>
