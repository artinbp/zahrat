<template>
  <div class="relative bg-[#fafafa] shadow-md rounded-[24px]">
    <table class="w-full text-sm  text-gray-800">
      <tbody>
        <tr class=" border-b">
        <td class="px-6 py-4">
          <div class="flex flex-row items-center w-full">
              <div class="w-full text-sm text-left text-gray-500 table-auto ">
                  <div
                    class=" rounded-xl flex flex-row-reverse pt-[32px]">
                  <div
                      class=" w-full flex text-[24px] flex-row items-center gap-4 font-medium text-gray-900 whitespace-nowrap">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M22.666 4.6665H9.33268C5.33268 4.6665 2.66602 6.6665 2.66602 11.3332V20.6665C2.66602 25.3332 5.33268 27.3332 9.33268 27.3332H22.666C26.666 27.3332 29.3327 25.3332 29.3327 20.6665V11.3332C29.3327 6.6665 26.666 4.6665 22.666 4.6665ZM23.2927 12.7865L19.1194 16.1198C18.2393 16.8265 17.1193 17.1732 15.9993 17.1732C14.8793 17.1732 13.746 16.8265 12.8793 16.1198L8.70602 12.7865C8.27935 12.4398 8.21268 11.7998 8.54602 11.3732C8.89268 10.9465 9.51935 10.8665 9.94602 11.2132L14.1193 14.5465C15.1327 15.3598 16.8527 15.3598 17.866 14.5465L22.0394 11.2132C22.466 10.8665 23.106 10.9332 23.4394 11.3732C23.786 11.7998 23.7193 12.4398 23.2927 12.7865Z"
                          fill="#3D3D3D"/>
                    </svg>
                    <p>
                      بوابة الدفع
                    </p>
                  </div>
                </div>
                  <div
                    class="rounded-xl flex flex-row- justify-between p-[32px] w-full">
                    <div class="px-6 flex flex-row gap-[40px] py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      <div class="flex flex-row gap-[8px] text-[18px] items-center">
                        <input v-model="check.zainCash" value="zainCash" @change="changeCheck" type="checkbox" class="accent-zahrat w-6 h-6">
                        <button class="zaincash-btn" >
                          <img  style="vertical-align:middle" src="https://test.zaincash.iq/images/zaincash-ar.png">
                        </button>
                      </div>

                      <div class="flex flex-row gap-[8px] text-[18px] items-center">
                        <input v-model="check.masterCard" value="masterCard" @change="changeCheck" type="checkbox" class="accent-zahrat w-6 h-6">
                        <svg width="46" height="32" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M27.7399 7.61377H18.2324V24.386H27.7399V7.61377Z" fill="#FF5F00"/>
                          <path d="M18.8365 15.9999C18.835 14.3846 19.2079 12.7902 19.9269 11.3372C20.6459 9.88434 21.6922 8.61105 22.9865 7.61379C21.3836 6.37694 19.4586 5.60776 17.4314 5.39417C15.4043 5.18058 13.3568 5.53118 11.523 6.40593C9.68928 7.28067 8.14319 8.64425 7.06153 10.3408C5.97986 12.0374 5.40625 13.9984 5.40625 15.9999C5.40625 18.0014 5.97986 19.9624 7.06153 21.659C8.14319 23.3556 9.68928 24.7191 11.523 25.5939C13.3568 26.4686 15.4043 26.8192 17.4314 26.6056C19.4586 26.392 21.3836 25.6229 22.9865 24.386C21.6922 23.3887 20.6459 22.1155 19.9269 20.6625C19.2079 19.2096 18.835 17.6152 18.8365 15.9999Z" fill="#EB001B"/>
                          <path d="M40.5661 15.9999C40.5662 18.0013 39.9926 19.9624 38.911 21.659C37.8294 23.3555 36.2834 24.7191 34.4496 25.5938C32.6159 26.4686 30.5685 26.8192 28.5413 26.6056C26.5142 26.392 24.5892 25.6229 22.9863 24.386C24.2796 23.3877 25.325 22.1142 26.0439 20.6616C26.7628 19.2089 27.1363 17.6149 27.1363 15.9999C27.1363 14.3849 26.7628 12.7909 26.0439 11.3382C25.325 9.88555 24.2796 8.61206 22.9863 7.61378C24.5892 6.37693 26.5142 5.60776 28.5413 5.39417C30.5685 5.18058 32.6159 5.5312 34.4496 6.40595C36.2834 7.2807 37.8294 8.64428 38.911 10.3408C39.9926 12.0374 40.5662 13.9985 40.5661 15.9999Z" fill="#F79E1B"/>
                          <path d="M39.5287 22.6096V22.2662H39.6697V22.1962H39.3105V22.2662H39.4516V22.6096H39.5287ZM40.2261 22.6096V22.1956H40.116L39.9893 22.4803L39.8626 22.1956H39.7525V22.6096H39.8302V22.2973L39.949 22.5665H40.0296L40.1484 22.2966V22.6096H40.2261Z" fill="#F79E1B"/>
                        </svg>
                        <p>master card</p>
                      </div>
                    </div>
                    <div class="flex flex-row justify-start w-[30rem] items-center gap-1">
                    <button
                        type="button"
                        class="bg-zahrat w-full h-[46px] rounded-[10px] text-white border border-zahrat hover:bg-zahrat-hover focus:ring-zahrat active:scale-95 font-medium rounded-lg text-sm px-2 py-2.5 text-center"
                        @click="confirm">
                      <p class="text-base">
                        {{ t('BuyTicket') }}
                      </p>
                    </button>
                    <button
                        type="button"
                        class="text-zahrat w-full h-[46px] rounded-[10px] hover:text-white border border-zahrat hover:bg-zahrat-hover focus:ring-zahrat active:scale-95 font-medium rounded-lg text-sm px-2 py-2.5 text-center"
                        @click="confirm"
                    >
                      <p class="text-base">
                        {{ 'القاء' }}
                      </p>
                    </button>
                  </div>
                  </div>
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
// import router from '@/router'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue';

const check = ref({
  masterCard: false,
  zainCash: false,
  visa: false
})
const { t } = useI18n()
// if (store.getters.getticket === undefined) router.push('/flight/search')
const changeCheck = (e) => {
  console.log(e,check.value,e.target.value)
  switch (e.target.value) {
    case 'zainCash':
      check.value.zainCash=true
      check.value.visa=false
      check.value.masterCard=false
      break
    case 'masterCard':
      check.value.zainCash=false
      check.value.visa=false
      check.value.masterCard=true
      break
    case 'visa':
      check.value.zainCash=false
      check.value.visa=true
      check.value.masterCard=false
      break
  }
}
function confirm () {
  store.dispatch('issueTicket')
}
</script>
<style>
.st0{fill:#050506;}
.st1{fill:#A09F9F;}
.st2{fill:#797979;}
.st3{fill:#F1F0F0;}
.st4{fill:#B3B4B6;}
.st5{fill:#E3E3E2;}
.st6{fill:#C5C5C6;}
.st7{fill:#B5B7B9;}
.st8{fill:#E6E6E6;}
.st9{fill:#BBBBBD;}
.st10{fill:#D6D6D6;}
.st11{fill:#DADADA;}
.st12{fill:#AFB1B2;}
.st13{fill:#CCCDCD;}
.st14{fill:#BEBFC0;}
.st15{fill:#D0D1D1;}

.zaincash-btn {
  background: #191817; /* Old browsers */
  border-radius:30px;
  border: none;
  outline: none;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 7px;
  padding-bottom: 7px;
}

.zaincash-btn:hover{
  background: #333231;
  transition: all 0.2s;
  color: #fff;
  border-radius:30px;
  border: none;
  outline: none;
}

.zaincash-btn > img {
  width: 160px;
}

</style>
