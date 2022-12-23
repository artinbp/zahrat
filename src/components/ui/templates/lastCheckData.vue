<script setup>
import { useI18n } from 'vue-i18n'
import store from '@/store/'
import { checkAirLines, checkAirPort, checkRTL, getTime, minToHour, solider } from '@/utils/func/storeSearch'
import { computed } from 'vue'

const { t } = useI18n()
const ticket = computed(() => store.getters.getFlightRivalidatedTicket).value.flight
</script>
<template>
  <div v-if="ticket" class="relative bg-[#fafafa] shadow-md rounded-[24px]" :class="`${checkRTL()?'rtl':'ltr'}`">
    <table class="w-full text-gray-500 "  :class="`${checkRTL()?'text-right':'text-left'}`">
      <thead class="text-gray-900">
        <tr :class="`${checkRTL()?'text-right':'text-left'}`">
          <th scope="col" class="px-[56px] pt-[56px] flex flex-row justify-between">
                <span class="flex flex-row gap-6 items-center text-[24px]">
                  <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.786 9.5601C25.306 9.5601 25.7193 9.13343 25.7193 8.6001V7.42676C25.7193 2.18676 24.1193 0.600098 18.8926 0.600098H10.4926H7.10596C1.8793 0.600098 0.279297 2.2001 0.279297 7.42676V8.0001C0.279297 8.53343 0.69263 8.94676 1.21263 8.94676C2.33263 8.94676 3.22596 9.85343 3.22596 10.9601C3.22596 12.0668 2.33263 12.9868 1.21263 12.9868C0.69263 12.9868 0.279297 13.4001 0.279297 13.9334V14.5068C0.279297 19.7468 1.8793 21.3334 7.10596 21.3334H10.4793H18.8793C24.106 21.3334 25.706 19.7334 25.706 14.5068C25.706 13.9868 25.2926 13.5601 24.7726 13.5601C23.6526 13.5601 22.7593 12.6668 22.7593 11.5601C22.7726 10.4534 23.666 9.5601 24.786 9.5601ZM11.426 17.1468C11.426 17.6668 10.9993 18.0934 10.4793 18.0934C9.9593 18.0934 9.53263 17.6668 9.53263 17.1468V13.5734C9.53263 13.0534 9.9593 12.6268 10.4793 12.6268C10.9993 12.6268 11.426 13.0534 11.426 13.5734V17.1468ZM11.426 8.3601C11.426 8.8801 10.9993 9.30676 10.4793 9.30676C9.9593 9.30676 9.53263 8.8801 9.53263 8.3601V4.78677C9.53263 4.26676 9.9593 3.8401 10.4793 3.8401C10.9993 3.8401 11.426 4.26676 11.426 4.78677V8.3601Z" fill="#3D3D3D"/>
</svg>
                  <p class=""
                     :class="`${checkRTL()?'text-right':'text-left'}`">{{ t('TicketInformation') }}</p>
                </span>
        </th>
        </tr>
      </thead>
      <tbody>
        <tr class="" :class="`${checkRTL()?'text-right':'text-left'}`">
        <td class="py-[56px] px-[56px]">
          <div class="border border-zahrat-gray border-gray-200 rounded-t-[24px] rounded-b-[24px]">
            <dl>
              <div class="flex flex-row gap-4 rounded-y-[24px]">
                <dt class="text-[20px] font-normal bg-white text-gray-700 px-[25px] py-[32px] rounded-tr-[24px]" :class="`${checkRTL()?'text-right':'text-left'}`">
                  {{ t('Origin') }}
                </dt>
                <dd class="mt-1 text-gray-900 rounded-t-[24px] px-[25px] py-[32px]  sm:mt-0 col-span-2"
                    :class="`${checkRTL()?'text-right':'text-left'}`">
                  {{ checkAirPort(ticket?.outbound_group?.Origin) }}
                </dd>
              </div>
              <hr class="border-b-2 ">
              <div class="flex flex-row  gap-4">
                <dt class="text-[20px] font-normal bg-white text-gray-700 px-[25px] py-[32px] " :class="`${checkRTL()?'text-right':'text-left'}`">
                  {{ t('Destination') }}
                </dt>
                <dd class="mt-1 text-gray-900 rounded-t-[24px] px-[25px] py-[32px]  sm:mt-0 col-span-2"
                    :class="`${checkRTL()?'text-right':'text-left'}`">
                  {{ checkAirPort(ticket?.outbound_group?.destination) }}
                </dd>
              </div>
              <hr class="border-b-2 ">
              <div class="flex flex-row  gap-4">
                <dt class="text-[20px] font-normal bg-white text-gray-700 px-[25px] py-[32px]" :class="`${checkRTL()?'text-right':'text-left'}`">
                  {{ t('Airlines') }}
                </dt>
                <dd class="mt-1 text-gray-900 rounded-t-[24px] sm:mt-0 px-[25px] py-[32px]  sm:col-span-2"
                    :class="`${checkRTL()?'text-right':'text-left'}`">
          <span v-for="(item, i) in solider(ticket?.outbound_operating_airlines)" :key="i">
             {{ checkAirLines(item.code) }}
          </span>
                </dd>
              </div>
              <hr class="border-b-2 ">
              <div class="flex flex-row  gap-4">
                <dt class="text-[20px] font-normal bg-white text-gray-700 px-[25px] py-[32px]" :class="`${checkRTL()?'text-right':'text-left'}`">
                  {{ t('DateAndTimeOfFlight') }}
                </dt>
                <dd class="mt-1 text-gray-900 px-[25px] py-[32px] rounded-t-[24px] sm:mt-0 sm:col-span-2"
                    :class="`${checkRTL()?'text-right':'text-left'}`">

                  <p v-for="(item , i) in ticket?.outbound_group?.flight_segments" :key="i" class=" text-gray-900 gap-2"
                     style="">{{ ' [' + (i + 1) + '] ' + getTime(item?.departure_date_time) }}
                    <span class=" text-slate-500">

                        ( {{
                        new Date(item.departure_date_time.split('T')[0].split('-')).toString().split(' ').slice(0, 4).join(' ')
                      }} )
                       </span>
                  </p>
                </dd>
              </div>
              <hr class="border-b-2 ">
              <div class="flex flex-row  gap-4">
                <dt class="text-[20px] font-normal bg-white text-gray-700 px-[25px] py-[32px] " :class="`${checkRTL()?'text-right':'text-left'}`">
                  {{ t('TotalFlightTime') }}
                </dt>
                <dd class="mt-1 text-gray-900 rounded-t-[24px] sm:mt-0 px-[25px] py-[32px]  sm:col-span-2"
                    :class="`${checkRTL()?'text-right':'text-left'}`">
                  {{ minToHour(ticket?.outbound_group?.journey_duration_in_minute) }}
                </dd>
              </div>
              <hr class="border-b-2 ">
              <div class="flex flex-row  gap-4">
                <dt class="text-[20px] font-normal bg-white text-gray-700 px-[25px] py-[32px]  rounded-br-[24px]" :class="`${checkRTL()?'text-right':'text-left'}`">
                  {{ t('allowedCargo') }}
                </dt>
                <dd class="mt-1 text-gray-900 rounded-t-[24px] px-[25px] py-[32px]  sm:mt-0 sm:col-span-2"
                    :class="`${checkRTL()?'text-right':'text-left'}`">
                  <p v-for="(item , i) in ticket?.outbound_group?.flight_segments" :key="i"
                     class=" text-gray-900  gap-2"
                     style="">{{ ' [' + (i + 1) + '] ' + item.baggage }}
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
  dt{
    @apply w-[220px];
  }
  dd{
    @apply flex flex-row items-center justify-start text-[20px];
  }
</style>
