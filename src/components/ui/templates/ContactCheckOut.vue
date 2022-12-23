<script setup>
import { ref } from 'vue'
import store from '@/store'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const Mail = ref(store.getters.getEmailPassenger ? store.getters.getEmailPassenger : 'no mail')
const Phone = ref(store.getters.getPhonePassenger ? store.getters.getPhonePassenger : 'no number')
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
            <path d="M22.666 4.6665H9.33268C5.33268 4.6665 2.66602 6.6665 2.66602 11.3332V20.6665C2.66602 25.3332 5.33268 27.3332 9.33268 27.3332H22.666C26.666 27.3332 29.3327 25.3332 29.3327 20.6665V11.3332C29.3327 6.6665 26.666 4.6665 22.666 4.6665ZM23.2927 12.7865L19.1194 16.1198C18.2393 16.8265 17.1193 17.1732 15.9993 17.1732C14.8793 17.1732 13.746 16.8265 12.8793 16.1198L8.70602 12.7865C8.27935 12.4398 8.21268 11.7998 8.54602 11.3732C8.89268 10.9465 9.51935 10.8665 9.94602 11.2132L14.1193 14.5465C15.1327 15.3598 16.8527 15.3598 17.866 14.5465L22.0394 11.2132C22.466 10.8665 23.106 10.9332 23.4394 11.3732C23.786 11.7998 23.7193 12.4398 23.2927 12.7865Z" fill="#3D3D3D"/>
          </svg>
          <p>
            معلومات السفر
          </p>
        </div>
      </tr>
      <tr
          class="text-zahrat rounded-xl flex flex-row gap-2 p-[32px] py-[14px]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#C02320" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 8V13" stroke="#C02320" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.9941 16H12.0031" stroke="#C02320" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p class="text-[18px]">
          سيتم إرسال معلومات التذكرة والمزيد من المعلومات إلى هذا العنوان.
        </p>
      </tr>
      <tr
          class=" rounded-xl flex flex-row-reverse p-[32px]">
        <div
            class="px-6 w-full flex flex-row gap-[24px] py-4 font-medium text-gray-900 whitespace-nowrap">
          <div class="flex flex-row gap-2 text-[18px] items-center">
            <p>
              {{ t('CustomerTable.email') }}:
            </p>
            <p>
              {{ Mail }}
            </p>
          </div>
          <div class="flex flex-row gap-2 text-[18px] items-center">
            <p>
              {{ t('CustomerTable.phone') }}:
            </p>
            <p>
              {{ Phone }}
            </p>
          </div>
        </div>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>

</style>
