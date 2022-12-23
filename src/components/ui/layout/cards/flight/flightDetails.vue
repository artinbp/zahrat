<script setup>
import { useRouter } from "vue-router"
import { defineProps, defineEmits, ref } from 'vue';
 import PluxIcons from '@/components/ui/templates/PluxIcons'
 import AirWayDetailes from '@/components/ui/layout/cards/flight/AirWayDetailes.vue'
 import {xMark} from '@/assets/icons/js/light';
 import { useI18n } from 'vue-i18n';
 import { currency, solider,  getTime, checkAirLines, checkCity, checkAirPort, checkRTL } from '@/utils/func/storeSearch';
 import FlightRules from '@/components/ui/templates/rules/FlightRules';
 import VisaRules from '@/components/ui/templates/rules/VisaRules';
const  router  = useRouter()
const { t } = useI18n()
const props = defineProps({
   object:{
     type:Object
   }
 })
 const emit = defineEmits(['close'])
 const paginate = ref('A')
const stops = () => {
  let stoper = []
  props.object.outbound_group.flight_segments.forEach((item) => {
    if (item.stop_quantity > 0)
      stoper = [item.technical_stops,...stoper]
  })
  if (props.object.outbound_group.flight_segments.length > 1)
    props.object.outbound_group.flight_segments.forEach((item, i) => {
      if (i < (props.object.outbound_group.flight_segments.length - 1)) stoper.push({arrival_airport: item.arrival_airport})
    })
  return stoper
}
</script>
<template>
    <div class="h-full w-full bg-[rgba(0,0,0,0.3)] fixed left-0 top-0 z-40 backdrop-blur-sm flex items-center">
      <div class="w-full h-[39.6rem] z-4 px-4">
        <div class="h-full w-[79.375rem] bg-[#FFFFFF] mx-auto rounded-[1.25rem] pt-5 px-6">
          <div
              @click="emit('close')"
              class="w-12 h-12 bg-[#F1F1F1] rounded-full flex items-center justify-center cursor-pointer mb-8 p-1 float-right">
           <plux-icons :path="xMark" class="stroke-zahrat-darkgray" size="34"></plux-icons>
          </div>
          <div class="h-[33.346rem] w-full flex gap-6">
            <div class="w-[59.75rem] h-full pb-10 overflow-scroll no-scrollbar">
              <div class="rounded-3xl overflow-hidden h-[11.438rem] bg-[#FAFAFA]">
                <div
                    class="flex flex-col justify-center items-center relative w-[13.313rem] h-full float-left after:h-full after:w-[0.188rem] after:bg-[#EEEEEE] after:block after:absolute after:top-0 after:right-0 after:rounded-full">
                  <div
                      class="w-[5.875rem] h-[1.813rem] bg-[#FAFAFA] text-sm font-normal text-center text-[rgba(61,61,61,0.7)] rounded-[1.156rem] pt-[0.270rem]">
                    {{ object.outbound_group.flight_segments[0].cabin_class }}
                  </div>
                  <div class="text-xl font-bold text-[#3D3D3D] mt-4">{{ currency(object.price_detail.total_price === -1 ? object.price_detail.adult_price : object.price_detail.total_price) }}</div>
                </div>
                <div class="float-right mt-[2.625rem] mr-10">
                  <div class="mx-auto w-20 relative">
                    <img class="w-16 h-16 rounded-full bg-[#fff] box-border border-[0.125rem] border-[#FFFFFF]"
                         v-for="(item, i) in solider(object?.outbound_operating_airlines)"
                         :key="i"
                         :src="`https://cdn.alibaba.ir/static/img/airlines/${item.code === '_008'?'IS':item.code}.png`"
                         alt=""
                         :style="`${(i>0)?checkRTL()?'margin-right: -26px;':'margin-left: -26px;':''}`"
                    />
                  </div>
                  <div class="w-[7.188rem] text-center text-sm font-normal text-[#3D3D3D] mt-4">{{
                      solider(object?.outbound_operating_airlines).length > 1 ? t('SeveralAirLines') : checkAirLines(object?.outbound_operating_airlines[0].code)
                    }}</div>
                </div>
                <div class="float-right mt-[2.5rem] mr-14 w-[3.85rem]">
                  <div class="font-bold text-2xl leading-9 text-[#3D3D3D] text-right  rtl">{{ checkCity(object.outbound_group.Origin) }}</div>
                  <div :title="checkAirPort(object.outbound_group.Origin).split('-')[1]" class="text-base font-normal leading-6 text-[rgba(61,61,61,0.8)] text-right mt-2 truncate rtl">
                    {{ (object.outbound_group.Origin) }}
                  </div>
                  <div
                      class="text-sm font-normal leading-[1.313rem] text-[rgba(61,61,61,0.8)] text-right mt-3 ">
                    {{ getTime(object?.outbound_group.flight_segments[0].departure_date_time) }}
                  </div>
                </div>
                <div class="float-right mt-[0.688rem] mr-8">
                  <div class="mt-10 relative w-[11rem] flex flex-row-reverse items-center justify-between">
                    <div class="h-0.5 w-[9.5rem] border-dashed border-[#eee] border-b-2 absolute top-[0.688rem] right-[1rem] "></div>
                    <div class="max-w-[0.75rem] max-h-[0.75rem] relative z-20">
                      <div class="w-3 h-3 rounded-full bg-[#9E9E9E]"></div>
                    </div>
                    <div v-if="stops().length > 0" class="flex flex-row gap-2">
                      <div class="max-w-[0.75rem] max-h-[0.75rem] relative group z-20"
                           v-for="(item, i) in stops()" :key="i">
                        <div
                            class="inline-block opacity-0 absolute left-0 -translate-x-[calc(50%-0.315rem)] -top-[2.75rem] group-hover:opacity-100 transition-all duration-500">
                          <span
                             class="rounded bg-[#3D3D3D] px-2 pb-1.5 text-sm font-normal leading-[1.313rem] text-[#FFFFFF] text-center relative z-20 truncate">
                            {{ checkCity(item.arrival_airport, 'ar') }}
                          </span>
                          <div class="mx-auto w-4 h-4 bg-[#3D3D3D] rotate-[25deg] skew-y-[40deg] rounded-[0.063rem] -mt-3"></div>
                        </div>
                        <div class="w-3 h-3 rounded-full bg-[#9E9E9E]"></div>
                        <span class="font-normal flex justify-center text-center text-[0.875rem] text-[rgba(61,61,61,0.6)]">{{
                            item.arrival_airport
                          }}</span>
                      </div>
                    </div>
                    <svg width="24" class="z-10" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M10.6296 20.0501L8.61957 15.3801L8.17957 14.3401C8.09957 14.1801 7.88957 14.0401 7.70957 14.0401H4.64957C3.68957 14.0401 2.54957 13.3301 2.10957 12.4701C1.95957 12.1701 1.95957 11.8101 2.10957 11.5101C2.54957 10.6601 3.69957 9.95006 4.65957 9.95006H7.71957C7.89957 9.95006 8.10957 9.81006 8.18957 9.65006L10.6396 3.95006C10.8996 3.32006 11.6896 2.81006 12.3696 2.81006L13.6896 2.81006C14.5396 2.81006 14.9596 3.45006 14.6196 4.24006L12.4596 9.25006C12.2896 9.64006 12.4996 9.96006 12.9296 9.96006H14.0396H15.8396C16.0696 9.96006 16.3996 9.83006 16.5596 9.67006L18.8896 7.35006C19.1296 7.11006 19.5996 7.00006 19.9396 7.11006L21.2996 7.56006C21.8896 7.74006 22.1696 8.41006 21.8896 8.96006L19.8896 11.3401C19.5796 11.7001 19.5796 12.2901 19.8896 12.6501L21.8896 15.0301C22.1596 15.5801 21.8896 16.2501 21.2996 16.4501L19.9396 16.9001C19.6096 17.0101 19.1296 16.9001 18.8896 16.6601L16.5596 14.3401C16.3996 14.1701 16.0696 14.0401 15.8396 14.0401H12.9296C12.4996 14.0401 12.2996 14.3501 12.4596 14.7501L14.6196 19.7601C14.9596 20.5501 14.5396 21.1901 13.6896 21.1901H12.3696C11.6896 21.1901 10.8996 20.6801 10.6296 20.0501Z"
                          fill="#3D3D3D" fill-opacity="0.8"></path>
                    </svg>
                  </div>
                  <div v-if="stops().length > 0" class="clear-both text-center text-base font-normal leading-6 text-[rgba(61,61,61,0.6)] pt-8">
                    {{ stops().length }} توقف
                  </div>
                </div>
                <div class="float-right mt-[2.5rem] mr-8 w-[3.85rem]">
                  <div class="font-bold text-2xl leading-9 text-[#3D3D3D] text-right truncate rtl">{{
                      checkCity(object?.outbound_group.destination)
                    }}</div>
                  <div :title="checkAirPort(object.outbound_group.destination).split('-')[1]" class="text-base font-normal leading-6 text-[rgba(61,61,61,0.8)] text-right mt-2 truncate rtl">
                  {{ object.outbound_group.destination }}
                  </div>
                  <div
                      class="text-sm font-normal leading-[1.313rem] text-[rgba(61,61,61,0.8)] text-right mt-3 ">
                    {{ getTime(object?.outbound_group.flight_segments[0].arrival_date_time) }}
                  </div>
                </div><!--v-if--></div>
              <div class="border-b-[0.188rem] border-[#EEEEEE] flex flex-row gap-12 mt-12 mb-6">
                <div
                    @click="paginate='A'"
                    class="border-b-[0.188rem] pb-2 translate-y-[0.188rem] text-[1.375rem] font-medium cursor-pointer" :class="[paginate === 'A' ? 'text-[#C02320] border-[#C02320]' : 'text-[#3D3D3D] border-transparent']">
                  معلومات الرحلة
                </div>
                <div
                    @click="paginate='B'"
                    class="border-b-[0.188rem] pb-2 translate-y-[0.188rem] text-[1.375rem] font-medium cursor-pointer" :class="[paginate === 'B' ? 'text-[#C02320] border-[#C02320]' : 'text-[#3D3D3D] border-transparent']">
                  قوانین استرجاع
                </div>
                <div
                    @click="paginate='C'"
                    class="border-b-[0.188rem] pb-2 translate-y-[0.188rem] text-[1.375rem] font-medium cursor-pointer" :class="[paginate === 'C' ? 'text-[#C02320] border-[#C02320]' : 'text-[#3D3D3D] border-transparent']">
                  قوانین فیزا و مسار
                </div>
              </div>
              <div class="overflow-y-scroll h-full">
                <div v-if="paginate === 'A'">
                  <air-way-detailes :object="object?.outbound_group">
                  </air-way-detailes>
                </div>
                <div v-if="paginate === 'B'">
                  <flight-rules></flight-rules>
                </div>
                <div v-if="paginate === 'C'">
                  <visa-rules></visa-rules>
                </div>
              </div>

            </div>
            <div class="w-[15.125rem] h-[calc(100%-1.5rem)] bg-[#FAFAFA] rounded-3xl pt-6 relative">
              <div class="text-center text-xl font-normal leading-[1.875rem] text-[#3D3D3D]">أسعار</div>
              <div class="text-center text-lg font-normal leading-[1.688rem] text-[#3D3D3D] mt-8">بالغ:
                {{
                  currency(object.price_detail.adult_price === -1 ? '' : object.price_detail.adult_price,
                      object.price_detail.currency)
                }}
              </div>
              <div v-if="object.price_detail.child_price !== -1 && object.price_detail.child_price !== 0" class="text-center text-lg font-normal leading-[1.688rem] text-[#3D3D3D] mt-6">طفل: {{ currency(object.price_detail.child_price === -1 ? '' : object.price_detail.child_price, object.price_detail.currency ) }}
              </div>
              <div v-if="object.price_detail.infant_price !== -1 && object.price_detail.infant_price !== 0" class="text-center text-lg font-normal leading-[1.688rem] text-[#3D3D3D] mt-6">رضیع: {{ currency(object.price_detail.infant_price === -1 ? '' : object.price_detail.infant_price, object.price_detail.currency ) }}
              </div>
              <div class="text-center text-xl font-bold leading-[1.875rem] text-[#C02320] mt-10">مجموع: {{ currency(object.price_detail.total_price === -1 ? object.price_detail.adult_price : object.price_detail.total_price, object.price_detail.currency ) }}
              </div>
              <button
                  @click="router.push('/flight/get-passenger')"
                  class="w-[11.125rem] h-[3.5rem] bg-[#C02320] rounded-[0.625rem] absolute bottom-8 left-0 mx-auto right-0 text-base font-medium text-[#FFFFFF]">
                احجز الآن
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped>
*{
  font-family: IRANSansX;
}
</style>
