<template>
  <div class="relative bg-[#fafafa] shadow-md rounded-[24px]">
    <table class="w-full text-sm  text-gray-800">
      <tbody>
        <tr class=" border-b">
        <td class="px-6 py-4">
          <div class="flex flex-row items-center justify-between gap-0">
            <div class="text-left">
              <div class="w-full h-[260px] text-sm text-left text-gray-500 table-auto ">
                  <div
                    class=" rounded-xl flex flex-row-reverse p-[32px]">
                  <div
                      class=" w-full flex text-[24px] flex-row items-center gap-4 font-medium text-gray-900 whitespace-nowrap">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M22.666 4.6665H9.33268C5.33268 4.6665 2.66602 6.6665 2.66602 11.3332V20.6665C2.66602 25.3332 5.33268 27.3332 9.33268 27.3332H22.666C26.666 27.3332 29.3327 25.3332 29.3327 20.6665V11.3332C29.3327 6.6665 26.666 4.6665 22.666 4.6665ZM23.2927 12.7865L19.1194 16.1198C18.2393 16.8265 17.1193 17.1732 15.9993 17.1732C14.8793 17.1732 13.746 16.8265 12.8793 16.1198L8.70602 12.7865C8.27935 12.4398 8.21268 11.7998 8.54602 11.3732C8.89268 10.9465 9.51935 10.8665 9.94602 11.2132L14.1193 14.5465C15.1327 15.3598 16.8527 15.3598 17.866 14.5465L22.0394 11.2132C22.466 10.8665 23.106 10.9332 23.4394 11.3732C23.786 11.7998 23.7193 12.4398 23.2927 12.7865Z"
                          fill="#3D3D3D"/>
                    </svg>
                    <p>
                      معلومات السفر
                    </p>
                  </div>
                </div>
                  <div
                    class="text-zahrat-darkgray rounded-xl flex flex-row gap-2 p-[32px] py-[14px]">
                  <p class="text-[18px]">
                    إذا كان لديك رمز خصم ، أدخله في القسم أدناه وانقر على زر تطبيق الرمز.
                  </p>
                </div>
                  <div
                    class=" rounded-xl flex flex-row-reverse p-[32px]">
                    <div
                      class="px-6 w-full flex flex-row justify-between gap-[40px] py-4 font-medium text-gray-900 whitespace-nowrap">
                      <div class="flex flex-row gap-[8px] text-[18px] items-center">
                        <input type="checkbox" class="accent-zahrat w-6 h-6">
                        <p>احجز الي حسابي من زین کاش</p>
                      </div>
                      <div class="flex flex-row gap-[8px] bg-[#eee] p-2 rounded-[12px] text-[18px] items-center">
                        موجودی الي حسابات:
                        <span>{{ currency(100000000,'IRR') }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <div class="flex flex-col justify-start items-center gap-1">
              <p class="text-xl pt-2 text-zahrat font-semibold"> {{ currency(1000000, 'IRR') }} </p>
              <p class="text-md  pt-[2px] text-zahrat font-semibold" :class="[true?'line-through':'']"> {{ currency(1120000, 'IRR') }} </p>
              <button
                  type="button"
                  class="bg-zahrat w-full h-[46px] rounded-[10px] text-white border border-zahrat hover:bg-zahrat-hover focus:ring-zahrat active:scale-95 font-medium rounded-lg text-sm px-2 py-2.5 text-center"
                  @click="confirm">
                <p class="text-base">
                  {{ t('BuyTicket') }}
                </p>
              </button>
            </div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import store from '@/store'
import { currency } from '@/utils/func/storeSearch'
import router from '@/router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
// if (store.getters.getticket === undefined) router.push('/flight/search')
function confirm () {
  router.push('/flight/pay')
  store.dispatch('issueTicket')
}
</script>
