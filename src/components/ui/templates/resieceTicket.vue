<template>
  <div class="relative bg-[#fafafa] shadow-md rounded-[24px]">
    <table class="w-full text-sm  text-gray-800">
      <tbody>
        <tr class=" border-b">
        <td class="px-6 py-4">
          <div class="flex flex-row items-center w-full">
              <div class="w-full  text-sm text-left text-gray-500 table-auto ">
                  <div
                    class="rounded-xl flex flex-row justify-between p-[32px] w-full">
                    <div class="px-6 flex flex-row gap-[40px] py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      <div class="flex flex-row gap-[8px] bg-[#EDBDBD] text-[18px] items-center px-4 p-2 rounded-[12px]">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.9993 2.66675C8.65268 2.66675 2.66602 8.65341 2.66602 16.0001C2.66602 23.3467 8.65268 29.3334 15.9993 29.3334C23.346 29.3334 29.3327 23.3467 29.3327 16.0001C29.3327 8.65341 23.346 2.66675 15.9993 2.66675ZM14.9993 10.6667C14.9993 10.1201 15.4527 9.66675 15.9993 9.66675C16.546 9.66675 16.9993 10.1201 16.9993 10.6667V17.3334C16.9993 17.8801 16.546 18.3334 15.9993 18.3334C15.4527 18.3334 14.9993 17.8801 14.9993 17.3334V10.6667ZM17.226 21.8401C17.1593 22.0134 17.066 22.1467 16.946 22.2801C16.8127 22.4001 16.666 22.4934 16.506 22.5601C16.346 22.6267 16.1727 22.6667 15.9993 22.6667C15.826 22.6667 15.6527 22.6267 15.4927 22.5601C15.3327 22.4934 15.186 22.4001 15.0527 22.2801C14.9327 22.1467 14.8393 22.0134 14.7727 21.8401C14.706 21.6801 14.666 21.5067 14.666 21.3334C14.666 21.1601 14.706 20.9867 14.7727 20.8267C14.8393 20.6667 14.9327 20.5201 15.0527 20.3867C15.186 20.2667 15.3327 20.1734 15.4927 20.1067C15.8127 19.9734 16.186 19.9734 16.506 20.1067C16.666 20.1734 16.8127 20.2667 16.946 20.3867C17.066 20.5201 17.1593 20.6667 17.226 20.8267C17.2927 20.9867 17.3327 21.1601 17.3327 21.3334C17.3327 21.5067 17.2927 21.6801 17.226 21.8401Z" fill="#C02320"/>
                        </svg>
                        <p class="text-zahrat">يمكنك رؤية التذكرة في قسم المستخدم الخاص بك</p>
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

const { t } = useI18n()
// if (store.getters.getticket === undefined) router.push('/flight/search')
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
