<script setup>
import { ref } from 'vue';
import store from '@/store';
import {
  checkAirLines,
  checkAirPort,
  checkCabinClass,
  checkCity,
  checkRTL,
  currency,
  getTime,
  solider
} from '@/utils/func/storeSearch';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
const ticket = ref(store.getters.getFlightRivalidatedTicket.flight)
console.log(ticket.value)
</script>
<template>
  <div class="px-[7.125rem]">
    <div class="rounded-3xl overflow-hidden h-[11.438rem] bg-[#FAFAFA] mt-[9.125rem] max-w-[94rem] mx-auto">
      <div
          class="flex flex-col justify-center items-center relative w-[13.313rem] h-full float-left after:h-full after:w-[0.188rem] after:bg-[#EEEEEE] after:block after:absolute after:top-0 after:right-0 after:rounded-full">
        <div
            class="w-auto h-[1.813rem] bg-[#FAFAFA] text-sm font-normal text-center text-[rgba(61,61,61,0.7)] rounded-[1.156rem] pt-[0.270rem]">
          {{ checkCabinClass(ticket.outbound_group.flight_segments[0].cabin_class) }}
        </div>
        <div class="text-xl font-bold text-[#3D3D3D] mt-4">{{
            currency(ticket.price_detail.total_price !== -1 ? ticket.price_detail.total_price : ticket.price_detail.adult_price)
          }}
        </div>
        <button
            class="border-2 border-[#C02320] text-[#C02320] hover:bg-[#C02320] hover:text-[#FFFFFF] h-10 w-[7.75rem] rounded-lg font-medium text-sm mt-[1.125rem]">
          تغییر بلیط
        </button>
      </div>
      <div class="float-right mt-[2.625rem] mr-10">
        <div class="mx-auto w-20 relative">
          <img class="w-16 h-16 rounded-full bg-[#fff] box-border border-[0.125rem] border-[#FFFFFF]"
               v-for="(item, i) in solider(ticket?.outbound_operating_airlines)"
               :key="i"
               :src="`https://cdn.alibaba.ir/static/img/airlines/${item.code}.png`"
               alt=""
               :style="`${(i>0)?checkRTL()?'margin-right: -26px;':'margin-left: -26px;':''}`"
          />
        </div>
        <div class="w-[7.188rem] text-center text-sm font-normal text-[#3D3D3D] mt-4">{{
            solider(ticket?.outbound_operating_airlines).length > 1 ? t('SeveralAirLines') : checkAirLines(ticket?.outbound_operating_airlines[0].code)
          }}
        </div>
      </div>
      <div class="float-right mt-[2.5rem] mr-24 w-[5rem]">
        <div class="font-bold text-xl leading-9 text-[#3D3D3D] text-right truncate rtl"
             :title="checkAirPort(ticket.outbound_group.Origin).split('-')[1]">
          {{ checkCity(ticket.outbound_group.Origin) }}
        </div>
        <div class="text-base font-normal leading-6 text-[rgba(61,61,61,0.8)] text-right mt-2 truncate rtl"
             :title="checkAirPort(ticket.outbound_group.Origin).split('-')[1]">
          {{ (ticket.outbound_group.Origin) }}
        </div>
        <div class="text-sm font-normal leading-[1.313rem] text-[rgba(61,61,61,0.8)] text-right mt-3 truncate"
             :title="getTime(ticket.outbound_group.departure_date_time)">
          {{ getTime(ticket.outbound_group.departure_date_time) }}
        </div>
      </div>
      <div class="float-right mt-[0.688rem] mr-8">
        <div class="mt-10 relative w-[11rem] flex flex-row-reverse items-center justify-between">
          <div
              class="h-0.5 w-[9.5rem] border-dashed border-zahrat-lighgray border-2 absolute top-[0.688rem] right-[1.2rem] z-10"></div>
          <div class="max-w-[0.75rem] max-h-[0.75rem] relative z-20">
            <div class="w-3 h-3 rounded-full bg-[#9E9E9E]"></div>
          </div>
          <div v-for="(stop, i) in ticket.outbound_group.flight_segments[0].technical_stops"
               :key="i"
               class="max-w-[0.75rem] max-h-[0.75rem] relative group z-20">
            <div
                class="inline-block opacity-0 absolute left-0 -translate-x-[calc(50%-0.315rem)] -top-[2.75rem] group-hover:opacity-100 transition-all duration-500">
              <span
                  class="rounded bg-[#3D3D3D] px-2 pb-1.5 text-sm font-normal leading-[1.313rem] text-[#FFFFFF] text-center relative z-20 truncate">{{
                  checkAirPort(stop.arrival_airport)
                }}</span>
              <div class="mx-auto w-4 h-4 bg-[#3D3D3D] rotate-[25deg] skew-y-[40deg] rounded-[0.063rem] -mt-3"></div>
            </div>
            <div class="w-3 h-3 rounded-full bg-[#9E9E9E]"></div>
            <span
                class="font-normal flex justify-center text-center text-[0.875rem] text-[rgba(61,61,61,0.6)]">{{
                stop.arrival_airport
              }}</span>
          </div>
          <svg width="24" height="24" class="z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.6296 20.0501L8.61957 15.3801L8.17957 14.3401C8.09957 14.1801 7.88957 14.0401 7.70957 14.0401H4.64957C3.68957 14.0401 2.54957 13.3301 2.10957 12.4701C1.95957 12.1701 1.95957 11.8101 2.10957 11.5101C2.54957 10.6601 3.69957 9.95006 4.65957 9.95006H7.71957C7.89957 9.95006 8.10957 9.81006 8.18957 9.65006L10.6396 3.95006C10.8996 3.32006 11.6896 2.81006 12.3696 2.81006L13.6896 2.81006C14.5396 2.81006 14.9596 3.45006 14.6196 4.24006L12.4596 9.25006C12.2896 9.64006 12.4996 9.96006 12.9296 9.96006H14.0396H15.8396C16.0696 9.96006 16.3996 9.83006 16.5596 9.67006L18.8896 7.35006C19.1296 7.11006 19.5996 7.00006 19.9396 7.11006L21.2996 7.56006C21.8896 7.74006 22.1696 8.41006 21.8896 8.96006L19.8896 11.3401C19.5796 11.7001 19.5796 12.2901 19.8896 12.6501L21.8896 15.0301C22.1596 15.5801 21.8896 16.2501 21.2996 16.4501L19.9396 16.9001C19.6096 17.0101 19.1296 16.9001 18.8896 16.6601L16.5596 14.3401C16.3996 14.1701 16.0696 14.0401 15.8396 14.0401H12.9296C12.4996 14.0401 12.2996 14.3501 12.4596 14.7501L14.6196 19.7601C14.9596 20.5501 14.5396 21.1901 13.6896 21.1901H12.3696C11.6896 21.1901 10.8996 20.6801 10.6296 20.0501Z"
                fill="#3D3D3D" fill-opacity="0.8"></path>
          </svg>
        </div>
        <div class="clear-both text-center text-base font-normal leading-6 text-[rgba(61,61,61,0.6)] pt-8">
          {{ ticket.outbound_group.flight_segments[0].stop_quantity }} توقف
        </div>
      </div>
      <div class="float-right mt-[2.5rem] mr-8 w-[5rem]">
        <div class="font-bold text-xl leading-9 text-[#3D3D3D] text-right truncate rtl"
             :title="checkAirPort(ticket.outbound_group.destination)">{{
            checkAirPort(ticket.outbound_group.destination)
          }}
        </div>
        <div class="text-base font-normal leading-6 text-[rgba(61,61,61,0.8)] text-right mt-2 truncate rtl"
             :title="checkAirPort(ticket.outbound_group.destination)">{{ ticket.outbound_group.destination }}
        </div>
        <div class="text-sm font-normal leading-[1.313rem] text-[rgba(61,61,61,0.8)] text-right mt-3 truncate"
             :title="getTime(ticket.outbound_group.arrival_date_time)">
          {{ getTime(ticket.outbound_group.arrival_date_time) }}
        </div>
      </div><!--v-if--></div>
  </div>
</template>
<style scoped>

</style>
