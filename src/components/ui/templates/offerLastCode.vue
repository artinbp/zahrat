<script setup>
import store from '@/store'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import {currency} from '@/utils/func/storeSearch';
const setOffer = () => {
  store.dispatch('checkOffer')
}
</script>
<template>
  <div class="relative rtl bg-[#fafafa] shadow-md rounded-[24px]">
    <table class="w-full text-sm text-left text-gray-500 table-auto ">
      <tbody>
        <tr
          class=" rounded-xl flex flex-row-reverse p-[32px]">
        <div
            class=" w-full flex text-[24px] flex-row items-center gap-4 font-medium text-gray-900 whitespace-nowrap">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.0393 2.6665H10.9593C5.91935 2.6665 4.66602 4.01317 4.66602 9.3865V24.3998C4.66602 27.9465 6.61268 28.7865 8.97268 26.2532L8.98602 26.2398C10.0793 25.0798 11.746 25.1732 12.6927 26.4398L14.0393 28.2398C15.1193 29.6665 16.866 29.6665 17.946 28.2398L19.2927 26.4398C20.2527 25.1598 21.9193 25.0665 23.0127 26.2398C25.386 28.7732 27.3193 27.9332 27.3193 24.3865V9.3865C27.3327 4.01317 26.0793 2.6665 21.0393 2.6665ZM11.9993 9.33317C12.7327 9.33317 13.3327 9.93317 13.3327 10.6665C13.3327 11.3998 12.746 11.9998 11.9993 11.9998C11.2527 11.9998 10.666 11.3998 10.666 10.6665C10.666 9.93317 11.2527 9.33317 11.9993 9.33317ZM19.9993 18.6665C19.2527 18.6665 18.666 18.0665 18.666 17.3332C18.666 16.5998 19.266 15.9998 19.9993 15.9998C20.7327 15.9998 21.3327 16.5998 21.3327 17.3332C21.3327 18.0665 20.746 18.6665 19.9993 18.6665ZM21.1993 10.1198L12.226 19.0932C12.026 19.2932 11.7727 19.3865 11.5193 19.3865C11.266 19.3865 11.0127 19.2932 10.8127 19.0932C10.426 18.7065 10.426 18.0665 10.8127 17.6798L19.786 8.7065C20.1727 8.31984 20.8127 8.31984 21.1993 8.7065C21.586 9.09317 21.586 9.73317 21.1993 10.1198Z" fill="#3D3D3D"/>
          </svg>

          <p>
            الرمز تخفیفات
          </p>
        </div>
      </tr>
        <tr
          class="text-zahrat-darkgray rounded-xl flex flex-row gap-2 p-[32px] py-[14px]">
        <p class="text-[18px]">
          إذا كان لديك رمز خصم ، أدخله في القسم أدناه وانقر على زر تطبيق الرمز.
        </p>
      </tr>
        <tr
          class=" rounded-xl flex flex-row-reverse p-[32px]">
        <div
            class="px-6 w-full flex flex-row justify-between gap-[8px] py-4 font-medium text-gray-900 whitespace-nowrap">
          <div class="flex flex-row gap-[8px] text-[18px] items-center">
            <input
                type="text"
                class="py-[13] px-[24px] w-[345px] h-[56px] rounded-md"
                placeholder=" الرمز تخفیفات"
            />
            <button
              type="button"
              class="bg-zahrat h-[56px] rounded-[10px] text-white border border-zahrat hover:bg-zahrat-hover focus:ring-zahrat active:scale-95 font-medium rounded-lg text-sm px-2 py-2.5 text-center"
              @click="setOffer">
            <p class="text-base">
              {{ t('BuyTicket') }}
            </p>
          </button>
          </div>
          <div class="flex flex-row gap-2 text-[18px] items-center">
            <h1 class="text-zahrat-green">
              {{ currency(120000,'IRR') }}
              <span class="text-zahrat-darkgray">   تخفیفات لک الاسعار</span>
            </h1>
          </div>
        </div>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>

</style>
