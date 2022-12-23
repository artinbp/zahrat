<script setup>
import { defineProps, ref } from 'vue';
import {
  checkAirLines,
  checkAirPort,
  checkCity,
  differentTime,
  getTime,
  minToHour,
  setDateCurrect
} from '@/utils/func/storeSearch';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
const props = defineProps({
  object: {
    type: Object
  }
})
const show = ref(false)
const stops = () => {
  let stoper = []
  if (props.object.flight_segments.length > 1)
    props.object.flight_segments.forEach((item, i) => {
      if (i < (props.object.flight_segments.length - 1)) stoper.push({
        arrival_airport: item.arrival_airport,
        departure_date_time: item.departure_date_time,
        arrival_date_time: item.arrival_date_time
      })
    })
  return stoper
}
const segmentsStop = stops()
</script>
<template>
  <div
      class="bg-[#FAFAFA] px-10 pt-6 pb-12 rounded-2xl  transition-all overflow-hidden duration-500" :class="show?'max-h-[128rem]':'max-h-[5.625rem]'">
    <div @click="show = !show" class="flex items-center flex-row-reverse justify-between cursor-pointer">
      <div  class="flex flex-row-reverse items-center gap-20">
        <div
            class="w-10 h-10 bg-[#FFFFFF] rounded-full flex justify-center items-center transition-all duration-500 " :class="show?'rotate-180':''">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M26.5604 12L17.8671 20.6934C16.8404 21.72 15.1604 21.72 14.1338 20.6934L5.44043 12"
                  stroke="#3D3D3D" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round"
                  stroke-linejoin="round"></path>
          </svg>
        </div>
        <div class="text-base font-normal leading-6 text-[#3D3D3D] rtl">{{ stops().length > 0 ? stops().length : 'بدون' }} توقف</div>
      </div>
      <div class="text-[1.75rem] font-bold text-[#3D3D3D] leading-[2.625rem]">{{  checkCity(object.Origin) }} ألی {{  checkCity(object.destination) }}</div>
    </div>
    <div v-for="(item, i) in object.flight_segments" :key="i">
      <div class="flex mt-[2.625rem] flex-row-reverse items-center justify-between">
        <div class="text-xl font-normal leading-[1.875rem] text-[#3D3D3D] rtl">{{ minToHour(item.travel_time_in_minutes) }}</div>
        <div class="flex items-center flex-row-reverse gap-4">
          <div class="text-xl font-normal leading-[1.875rem] text-[#3D3D3D]"> {{ checkAirLines(item.operating_airline.code) }}</div>
          <img class="w-16 h-16 rounded-full bg-[#fff] box-border border-[0.125rem] border-[#FFFFFF]"
               :src="`https://cdn.alibaba.ir/static/img/airlines/${(item.operating_airline.code === '_008'?'IS':item.operating_airline.code)}.png`"
               alt=""
          />
        </div>
      </div>
      <div class="flex mt-10 items-center justify-between mr-[1.313rem] flex-row-reverse">
        <div class="text-lg font-normal leading-[1.688rem] text-[#3D3D3D] rtl">
          {{
            checkAirPort(item?.departure_airport)
          }} ( {{ item?.departure_airport }} )
        </div>
        <div class="flex items-center flex-row-reverse gap-6">
          <div class="text-lg font-normal leading-[1.688rem] text-[rgba(61,61,61,0.7)] rtl">
            {{ setDateCurrect(item.departure_date_time) }}
          </div>
          <div class="text-lg font-bold leading-[1.688rem] text-[#3D3D3D]">{{ getTime(item.departure_date_time) }}</div>
          <div class="h-[1.375rem]">
            <div class="w-[1.375rem] h-[1.375rem] rounded-full bg-[#D9D9D9]"></div>
            <div class="w-[0.125rem] h-[3rem] bg-[#D9D9D9] mx-auto"></div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between mr-[1.313rem] mt-10 flex-row-reverse">
        <div class="text-lg font-normal leading-[1.688rem] text-[#3D3D3D] rtl">  {{
            checkAirPort(item?.arrival_airport)
          }} ( {{ item?.arrival_airport }} )
        </div>
        <div class="flex items-center flex-row-reverse gap-6">
          <div class="text-lg font-normal leading-[1.688rem] text-[rgba(61,61,61,0.7)] rtl">{{ setDateCurrect(item.arrival_date_time) }}
          </div>
          <div class="text-lg font-bold leading-[1.688rem] text-[#3D3D3D]">{{ getTime(item.arrival_date_time) }}</div>
          <div class="w-[1.375rem] h-[1.375rem] rounded-full bg-[#D9D9D9]"></div>
        </div>
      </div>
      <div class="flex flex-row mt-[3.5rem] gap-4">
        <div
            class="text-base font-normal leading-6 text-[rgba(61,61,61,0.7)] bg-[#F1F1F1] rounded-full rtl py-1 px-2">
          رقم رحلة {{ item.flight_number }}
        </div>
        <div
            class="text-base font-normal leading-6 text-[rgba(61,61,61,0.7)] bg-[#F1F1F1] rounded-full rtl py-1 px-2">
          {{ item.operating_airline.equipment }}
        </div>
        <div
            class="text-base font-normal leading-6 text-[rgba(61,61,61,0.7)] bg-[#F1F1F1] rounded-full rtl py-1 px-2">
          {{
            item.is_charter ? t('FlightType.Charter') : t('FlightType.Systemic')
          }}
        </div>
      </div>
      <div class="flex flex-row items-center mt-9 gap-2">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_636_7341)">
            <path
                d="M13.4171 16.1777C13.0659 16.1777 12.7812 16.4624 12.7812 16.8136V31.0175C12.7812 31.3686 13.0659 31.6533 13.4171 31.6533C13.7683 31.6533 14.053 31.3686 14.053 31.0175V16.8136C14.053 16.4624 13.7683 16.1777 13.4171 16.1777Z"
                fill="#C02320"></path>
            <path
                d="M19.9989 9.11938C18.909 9.11938 17.8745 9.30415 17.0861 9.6397C15.7894 10.1915 15.5957 10.9533 15.5957 11.3583C15.5957 12.8281 17.8108 13.5972 19.9989 13.5972C21.0887 13.5972 22.1231 13.4124 22.9116 13.0769C24.2082 12.5251 24.4019 11.7633 24.4019 11.3583C24.402 9.88845 22.187 9.11938 19.9989 9.11938ZM19.9989 12.3255C17.9441 12.3255 16.8674 11.6068 16.8674 11.3583C16.8674 11.1098 17.9441 10.3911 19.9989 10.3911C22.0535 10.3911 23.1302 11.1097 23.1302 11.3583C23.1302 11.6069 22.0536 12.3255 19.9989 12.3255Z"
                fill="#C02320"></path>
            <path
                d="M28.8689 4.35141H23.926V3.22219C24.6182 3.14657 25.1587 2.55883 25.1587 1.84696V1.38391C25.1588 0.620861 24.5379 0 23.7748 0H16.2238C15.4608 0 14.8399 0.620861 14.8399 1.38399V1.84703C14.8399 2.55907 15.3806 3.14672 16.0728 3.22227V4.35141H11.1298C9.30602 4.35141 7.82227 5.83517 7.82227 7.659V34.7216C7.82227 36.3609 9.02141 37.7248 10.5884 37.9841L11.4399 39.6532C11.5485 39.8661 11.7674 40.0001 12.0063 40.0001H13.1739C13.4129 40.0001 13.6317 39.866 13.7403 39.6531L14.5689 38.0291H25.4299L26.2584 39.6531C26.367 39.866 26.5857 40.0001 26.8248 40.0001H27.9924C28.2314 40.0001 28.4501 39.866 28.5588 39.6531L29.4103 37.9841C30.9773 37.7248 32.1765 36.3609 32.1765 34.7215V7.659C32.1766 5.83525 30.6927 4.35141 28.8689 4.35141ZM16.2239 1.27172H23.7749C23.8346 1.27172 23.8871 1.32422 23.8871 1.38399V1.84703C23.8871 1.9068 23.8346 1.95922 23.7749 1.95922H23.3639C23.1621 1.95922 22.9761 2.05454 22.8577 2.21008C22.7046 2.10399 22.5285 2.04704 22.3419 2.04704C22.1261 2.04704 21.9244 2.12313 21.7564 2.26321C21.5882 2.12321 21.3864 2.04704 21.1708 2.04704C20.9552 2.04704 20.7535 2.12305 20.5853 2.26329C20.4171 2.12321 20.2153 2.04704 19.9996 2.04704C19.7839 2.04704 19.5822 2.12313 19.414 2.26329C19.2459 2.12321 19.0441 2.04704 18.8283 2.04704C18.6126 2.04704 18.4108 2.12313 18.2428 2.26329C18.0746 2.12321 17.8728 2.04704 17.6571 2.04704C17.4706 2.04704 17.2945 2.10399 17.1413 2.21016C17.023 2.05461 16.8369 1.9593 16.6352 1.9593H16.2241C16.1643 1.9593 16.1119 1.90688 16.1119 1.84711V1.38399H16.1118C16.1118 1.32422 16.1642 1.27172 16.2239 1.27172ZM22.6545 3.6936V4.35141H17.3446V3.6936C17.457 3.65743 17.5624 3.59977 17.657 3.52102C17.8251 3.66102 18.0269 3.73719 18.2427 3.73719C18.4583 3.73719 18.6599 3.66118 18.8282 3.52094C18.9964 3.66102 19.1982 3.73719 19.4139 3.73719C19.6296 3.73719 19.8313 3.6611 19.9995 3.52094C20.1676 3.66102 20.3694 3.73719 20.5852 3.73719C20.8009 3.73719 21.0027 3.6611 21.1707 3.52094C21.3389 3.66102 21.5407 3.73719 21.7564 3.73719C21.972 3.73719 22.1736 3.66118 22.3419 3.52094C22.4364 3.59962 22.5419 3.65743 22.6545 3.6936ZM12.7846 38.7284H12.3959L12.0391 38.0291H13.1413L12.7846 38.7284ZM27.603 38.7284H27.2143L26.8576 38.0291H27.9597L27.603 38.7284ZM28.8689 36.7574H11.1299C10.2294 36.7574 9.46407 36.1694 9.19633 35.3574H30.8026C30.5349 36.1695 29.7695 36.7574 28.8689 36.7574ZM30.9049 34.0858H9.09406V7.659C9.09406 6.53642 10.0073 5.62314 11.1299 5.62314H28.8689C29.9915 5.62314 30.9048 6.53642 30.9048 7.659V34.0858H30.9049Z"
                fill="#C02320"></path>
            <path
                d="M26.5812 16.1777C26.2299 16.1777 25.9453 16.4624 25.9453 16.8136V31.0175C25.9453 31.3686 26.2299 31.6533 26.5812 31.6533C26.9324 31.6533 27.217 31.3686 27.217 31.0175V16.8136C27.217 16.4624 26.9324 16.1777 26.5812 16.1777Z"
                fill="#C02320"></path>
            <path
                d="M16.7081 16.1777C16.357 16.1777 16.0723 16.4624 16.0723 16.8136V31.0175C16.0723 31.3686 16.357 31.6533 16.7081 31.6533C17.0593 31.6533 17.344 31.3686 17.344 31.0175V16.8136C17.344 16.4624 17.0592 16.1777 16.7081 16.1777Z"
                fill="#C02320"></path>
            <path
                d="M19.9991 16.1777C19.648 16.1777 19.3633 16.4624 19.3633 16.8136V31.0175C19.3633 31.3686 19.648 31.6533 19.9991 31.6533C20.3504 31.6533 20.635 31.3686 20.635 31.0175V16.8136C20.635 16.4624 20.3504 16.1777 19.9991 16.1777Z"
                fill="#C02320"></path>
            <path
                d="M23.2902 16.1777C22.9389 16.1777 22.6543 16.4624 22.6543 16.8136V31.0175C22.6543 31.3686 22.9389 31.6533 23.2902 31.6533C23.6414 31.6533 23.926 31.3686 23.926 31.0175V16.8136C23.926 16.4624 23.6413 16.1777 23.2902 16.1777Z"
                fill="#C02320"></path>
          </g>
          <defs>
            <clipPath id="clip0_636_7341">
              <rect width="40" height="40" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
        <div class="text-lg font-normal leading-[1.688rem] text-[#C02320] rtl"> {{
            item.baggage || 'no baggage'
          }}
        </div>
      </div>
      <div
          v-if="segmentsStop[i]?.arrival_airport"
          class="h-[3.25rem] bg-[#EDBDBD] rounded-lg mt-8 text-lg font-normal leading-[1.688rem] text-[#C02320] rtl flex items-center px-6">
        توقف {{ checkAirPort(segmentsStop[i].arrival_airport) }} فی
        {{ differentTime(segmentsStop[i].arrival_date_time, segmentsStop[i].departure_date_time) }}
      </div>
      <div v-for="(stop, x) in  item.technical_stops"
           :key="x"
           class="h-[3.25rem] bg-[#EDBDBD] rounded-lg mt-8 text-lg font-normal leading-[1.688rem] text-[#C02320] rtl flex items-center px-6">
        توقف {{ checkAirPort(stop.arrival_airport) }} فی
        {{ differentTime(stop.departure_date_time, stop.arrival_date_time) }}
      </div>

    </div>

  </div>
</template>
<style scoped>

</style>
