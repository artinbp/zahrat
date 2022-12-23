<script setup>
import PluxInput from '@/components/ui/inputs/passenger/PluxInput';
import { computed, ref } from 'vue';
import DateSelect from '@/components/ui/inputs/passenger/DateSelect';
import { domesticFlightChecker } from '@/utils/func/storeSearch';
import countriesData from '@/utils/datas/countries.json';
import store from '@/store';
const passengers = computed(() => store.getters.getPassenger)
const min = ref(15)
const sec = ref(0)
const parser = () => {
  sec.value--
  if(sec.value<0) {
    sec.value=59
    min.value--
  }
}
const timer = () => {
  // Tue Aug 02 2022 10:57:38 GMT+0430 (Iran Daylight Time)
  const inter = setInterval(parser, 1000)
  if (min.value === 0 && sec.value === 0) clearInterval(inter)
}
timer()

function countries (search, index) {
  if (search === 'IR' && domesticFlightChecker(store.getters.getorigin, store.getters.getdestination)) {
    store.commit('setFlightPassenger', {data:{codetype:'National'},index:index})
  } else {
    store.commit('setFlightPassenger', {data:{codetype:'Passport'},index:index})
  }
  store.commit('setFlightPassenger', {data:{country:search},index:index})
  document.getElementById(`PassengerCode${index}`).focus()
}
const onPassportChange = (e, index) => {
  document.getElementById(`firstname${index}`).focus()
}
const onFirstChange = (data,index) => {
  store.commit('setFlightPassenger', {data:{firstname:data},index:index})
    document.getElementById(`lastname${index}`).focus()
}
function enter (e,index) {
  console.log(e,`PassengerCode${index}`)
  document.getElementById(`PassengerCode${index}`).focus()
}
const onLastChange = (e, index) => {
  if (e.keyCode === 13) {
    document.getElementById(`gender${index}`).focus()
  }
}
const onGenderChange = (e, index) => {
  console.log(e, index)
  document.getElementById(`PassengerCode${index}`).focus()
}
const onExpireDate = (e,index) => {
  console.log(e, index)
}
const onBirthDate = (e, index) => {
  console.log(e, index)
}
const Errors = computed(() => store.getters.getPassengerError.customers)
</script>
<template>
  <div class="w-[1552px] bg-[#fafafa] mt-10 mx-auto rounded-t-lg">
    <div class=" relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-[#fafafa]">
        <tr>
          <th scope="col" class="py-3 px-6">
            <div class="flex flex-row justify-between ">
              <h1 class="p-6 text-[24px] font-bold flex flex-row gap-2 items-center">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9993 2.66675C8.50602 2.66675 5.66602 5.50675 5.66602 9.00008C5.66602 12.4267 8.34602 15.2001 11.8393 15.3201C11.946 15.3067 12.0527 15.3067 12.1327 15.3201C12.1594 15.3201 12.1727 15.3201 12.1993 15.3201C12.2127 15.3201 12.2127 15.3201 12.226 15.3201C15.6393 15.2001 18.3194 12.4267 18.3327 9.00008C18.3327 5.50675 15.4927 2.66675 11.9993 2.66675Z" fill="#292D32"/>
                <path d="M18.7733 18.8666C15.0533 16.3866 8.98661 16.3866 5.23995 18.8666C3.54661 19.9999 2.61328 21.5333 2.61328 23.1733C2.61328 24.8133 3.54661 26.3333 5.22661 27.4533C7.09328 28.7066 9.54661 29.3333 11.9999 29.3333C14.4533 29.3333 16.9066 28.7066 18.7733 27.4533C20.4533 26.3199 21.3866 24.7999 21.3866 23.1466C21.3733 21.5066 20.4533 19.9866 18.7733 18.8666Z" fill="#292D32"/>
                <path d="M26.6525 9.78664C26.8658 12.3733 25.0258 14.64 22.4792 14.9466C22.4658 14.9466 22.4658 14.9466 22.4525 14.9466H22.4125C22.3325 14.9466 22.2525 14.9466 22.1858 14.9733C20.8925 15.04 19.7058 14.6266 18.8125 13.8666C20.1858 12.64 20.9725 10.8 20.8125 8.79997C20.7192 7.71997 20.3458 6.7333 19.7858 5.8933C20.2925 5.63997 20.8792 5.47997 21.4792 5.42664C24.0925 5.19997 26.4258 7.14664 26.6525 9.78664Z" fill="#292D32"/>
                <path d="M29.321 22.1201C29.2143 23.4135 28.3876 24.5335 27.001 25.2935C25.6676 26.0268 23.9876 26.3735 22.321 26.3335C23.281 25.4668 23.841 24.3868 23.9476 23.2401C24.081 21.5868 23.2943 20.0001 21.721 18.7335C20.8276 18.0268 19.7876 17.4668 18.6543 17.0535C21.601 16.2001 25.3076 16.7735 27.5876 18.6135C28.8143 19.6001 29.441 20.8401 29.321 22.1201Z" fill="#292D32"/>
              </svg>

                معلومات المسافرين</h1>
              <h1 class="p-6 text-[24px]">وقت متوقی : <span class="text-zahrat">{{ (min>9?min:'0'+min) + ':' + (sec>9?sec:'0'+sec)  }}</span></h1>
            </div>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr class="border-b">
          <th
              v-for="(passenger, i) in passengers" :key="i"
              scope="row" class="py-4 px-6 font-medium text-gray-900 mt-5 grid grid-cols-4 gap-y-8 gap-4">
            <h1 class="absolute -translate-y-11 -translate-x-2 p-2 px-6 rounded-lg text-zahrat-darkgray text-[20px] font-semibold bg-white">{{ passenger.usertype }}</h1>
            <plux-input :index="i" @enter="enter" id="country" title="بلد اِصدار جواز السفر" @value="countries" :list="countriesData" type="country" :error="Errors[i].firstName.status" :error-title="Errors[i].firstName.type + ' ' + Errors[i].firstName.title"></plux-input>
            <plux-input :index="i" id="PassengerCode" title="رقم الجواز" @value="onPassportChange" type="text" :error="Errors[i].firstName.status" :error-title="Errors[i].firstName.type + ' ' + Errors[i].firstName.title"></plux-input>
            <plux-input :index="i" id="firstname" title="اسم" @value="onFirstChange" type="text" :error="Errors[i].firstName.status" :error-title="Errors[i].firstName.type + ' ' + Errors[i].firstName.title"></plux-input>
            <plux-input :index="i" id="lastname" title="لقب" @value="onLastChange" type="text" :error="Errors[i].firstName.status" :error-title="Errors[i].firstName.type + ' ' + Errors[i].firstName.title"></plux-input>
            <plux-input :index="i" id="gender" title="الجنس" @value="onGenderChange" :list="[{title:'woman', value:'female'}, {title:'man', value:'male'}]" type="text" :error="Errors[i].firstName.status" :error-title="Errors[i].firstName.type + ' ' + Errors[i].firstName.title"></plux-input>
            <date-select :index="i" id="birthDay" title="تاریخ المیلاد" @value="onBirthDate" ></date-select>
            <date-select :index="i" id="expireDate" title="جواز سفر منتهي" type="expire" @value="onExpireDate"></date-select>
          </th>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>
<style scoped>

</style>
