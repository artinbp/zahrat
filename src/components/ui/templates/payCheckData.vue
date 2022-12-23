<script setup>
import { useI18n } from 'vue-i18n'
import store from '@/store/'
import { checkAirLines, checkAirPort, checkRTL, getTime, minToHour, solider } from '@/utils/func/storeSearch'
import { computed, ref } from 'vue'

const { t } = useI18n()
const ticket = computed(() => store.getters.getFlightRivalidatedTicket).value.flight
const Phone = ref(store.getters.getPhonePassenger ? store.getters.getPhonePassenger : 'no number')
</script>
<template>
  <div v-if="ticket" class="relative bg-[#fafafa] shadow-md rounded-[24px]" :class="`${checkRTL()?'rtl':'ltr'}`">
    <table class="w-full text-sm text-gray-500 "  :class="`${checkRTL()?'text-right':'text-left'}`">
      <tbody>
        <tr class="" :class="`${checkRTL()?'text-right':'text-left'}`">
        <td class="">
          <div class="border border-zahrat-gray border-gray-200 rounded-t-[24px] rounded-b-[24px]">
            <dl>
              <div class="flex flex-row gap-4 rounded-y-[24px]">
                <dt class="text-[20px] font-normal bg-white text-gray-700 px-[25px] py-[32px] rounded-tr-[24px]" :class="`${checkRTL()?'text-right':'text-left'}`">
                  {{ 'بيانات الدفع' }}
                </dt>
                <dd class="mt-1 text-gray-900 rounded-t-[24px] px-[25px] py-[32px]  sm:mt-0 col-span-2"
                    :class="`${checkRTL()?'text-right':'text-left'}`">
                  {{ checkAirPort(ticket?.outbound_group?.Origin).split(',')[0] }} الي {{ checkAirPort(ticket?.outbound_group?.destination).split(',')[0]  }}
                </dd>
              </div>
              <hr class="border-b-2 ">
              <div class="flex flex-row  gap-4">
                <dt class="text-[20px] font-normal bg-white text-gray-700 px-[25px] py-[32px] " :class="`${checkRTL()?'text-right':'text-left'}`">
                  {{ t('CustomerTable.phone') }}
                </dt>
                <dd class="mt-1 text-gray-900 rounded-t-[24px] px-[25px] py-[32px]  sm:mt-0 col-span-2"
                    :class="`${checkRTL()?'text-right':'text-left'}`">
                  {{ Phone }}
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
