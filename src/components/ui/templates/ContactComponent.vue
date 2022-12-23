<script setup>
import { computed, onMounted, ref } from 'vue'
import { checkRTL, mailValidate, numberValidate } from '@/utils/func/storeSearch'
import store from '@/store'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const validMail = ref(false)
const validPhone = ref(false)
// const Mail = ref(store.getters.getEmailPassenger ? store.getters.getEmailPassenger : store.getters.getUser.EmailAddress)
// const Phone = ref(store.getters.getPhonePassenger ? store.getters.getPhonePassenger : store.getters.getUser.PhoneNumber)
const Mail = ref(store.getters.getEmailPassenger ? store.getters.getEmailPassenger : '')
const Phone = ref(store.getters.getPhonePassenger ? store.getters.getPhonePassenger : '')
const emailValidator = () => {
  if (Mail.value) {
    validMail.value = mailValidate(Mail.value)
    store.commit('setPassengerMail', Mail.value)
    if (!validMail.value) {
      store.commit('setPassengerErrorMail', {
        title: 'Mail',
        status: true,
        type: 'Invalid'
      })
      return ''
    }
    store.commit('setPassengerErrorMail', {
      title: 'Mail',
      status: false,
      type: ''
    })
    return ''
  }
  store.commit('setPassengerErrorMail', {
    title: 'Mail',
    status: true,
    type: 'require'
  })
  return ''
}
const phoneValidator = () => {
  if (Phone.value) {
    validPhone.value = numberValidate(Phone.value)
    store.commit('setPassengerPhone', Phone.value)
    if (!validPhone.value) {
      store.commit('setPassengerErrorPhone', {
        title: 'Phone',
        status: true,
        type: 'Invalid'
      })
      return ''
    }
    store.commit('setPassengerErrorPhone', {
      title: 'Phone',
      status: false,
      type: ''
    })
    return ''
  }
  store.commit('setPassengerErrorPhone', {
    title: 'Phone',
    status: true,
    type: 'require'
  })
  return ''
}
const inputEmailFocus = () => {
  emailToggle.value = true
}
const inputEmailBlur = () => {
  if (!(Mail.value.toString().length > 0)) {
    return emailToggle.value = false
  }
  return emailToggle.value = true
}
const inputPhoneFocus = () => {
  phoneToggle.value = true
}
const inputPhoneBlur = () => {
  if (!(Phone.value.toString().length > 0)) {
    return phoneToggle.value = false
  }
  return phoneToggle.value = true
}
const emailToggle = ref(false)
const phoneToggle = ref(false)
const mailError = computed(() => store.getters.getPassengerErrorMail)
const phoneError = computed(() => store.getters.getPassengerErrorPhone)
onMounted(() => {
  emailValidator()
  phoneValidator()
})
</script>
<template>
  <div class="relative bg-[#fafafa] shadow-md rounded-[24px]">
    <table class="w-full text-sm text-left text-gray-500 table-auto ">
      <tbody>
      <tr
          class=" rounded-xl flex flex-row-reverse p-[32px]">

        <div
            class="px-6 w-1/2 grid grid-cols-2 gap-[24px] py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
          <div :class="checkRTL()?'rtl text-right':'ltr text-left'">
             <span class="text-zahrat-gray absolute transition-all rounded-xl"
                   :class="[emailToggle ? 'text-[14px] translate-y-[0.4rem] font-semibold -translate-x-4' : 'text-[20px] translate-y-[1.8rem] font-semibold -translate-x-4']"
                   @click="inputEmailFocus">{{ t('Inputs.simpleEmail') }}</span>

            <input v-model="Mail" type="text" id="email"
                   @click="emailValidator()" @keyup="emailValidator()" @change="emailValidator()"
                   class="h-[80px] w-full pb-[0.28rem] p-[18px] text-zahrat-darkgray rounded-xl text-[20px] leading-[1rem] font-semibold"
                   :class="[mailError.status? 'outline outline-2 outline-zahrat-orange':'']"
                   @blur="inputEmailBlur"
                   @focus="inputEmailFocus"
                   required>
            <span v-if="mailError.status"
                  class="p-2 py-3 text-[15px] font-semibold text-zahrat-orange flex flex-row items-center gap-2">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 9V14" stroke="#EE6400" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path
    d="M11.9994 21.41H5.93944C2.46944 21.41 1.01944 18.93 2.69944 15.9L5.81944 10.28L8.75944 5.00003C10.5394 1.79003 13.4594 1.79003 15.2394 5.00003L18.1794 10.29L21.2994 15.91C22.9794 18.94 21.5194 21.42 18.0594 21.42H11.9994V21.41Z"
    stroke="#EE6400" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9941 17H12.0031" stroke="#EE6400" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      {{ mailError.type + ' ' + mailError.title }}</span>
          </div>
          <div :class="checkRTL()?'rtl text-right':'ltr text-left'">
             <span class="text-zahrat-gray absolute transition-all rounded-xl"
                   :class="[phoneToggle ? 'text-[14px] translate-y-[0.5rem] font-semibold -translate-x-[1rem]' : 'text-[20px] translate-y-[1.8rem] font-semibold -translate-x-[1rem]']"
                   @click="inputPhoneFocus">{{ t('CustomerTable.phone') }}</span>
            <div
                class="flex flex-row-reverse h-[80px] rtl w-full gap-1 text-zahrat-darkgray rounded-xl text-[20px] leading-[1rem] font-semibold"
                :class="[phoneError.status? 'outline outline-2 outline-zahrat-orange':'']"
            >
              <p
                  style="direction: ltr"
                  class="w-1/5 h-full rounded-l-xl text-left flex items-center text-zahrat-slate justify-center bg-white flex-row">
                +98</p>
              <input @click="phoneValidator()"
                     @keyup="phoneValidator()"
                     @change="phoneValidator()"
                     v-model="Phone"
                     type="text"
                     id="phone"
                     class="w-4/5 rounded-r-xl h-full"
                     @blur="inputPhoneBlur"
                     @focus="inputPhoneFocus"
                     required>
            </div>

            <span v-if="phoneError.status"
                  class="p-2 py-3 text-[15px] font-semibold text-zahrat-orange flex flex-row items-center gap-2">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 9V14" stroke="#EE6400" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path
    d="M11.9994 21.41H5.93944C2.46944 21.41 1.01944 18.93 2.69944 15.9L5.81944 10.28L8.75944 5.00003C10.5394 1.79003 13.4594 1.79003 15.2394 5.00003L18.1794 10.29L21.2994 15.91C22.9794 18.94 21.5194 21.42 18.0594 21.42H11.9994V21.41Z"
    stroke="#EE6400" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9941 17H12.0031" stroke="#EE6400" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      {{ phoneError.type + ' ' + phoneError.title }}</span>
          </div>
        </div>
        <div class="w-1/2 p-2">
          <h1 class="flex flex-row items-center gap-2 p-4 text-zahrat-darkgray text-[24px] font-semibold">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M14.7327 19.9334L12.266 22.4001C11.746 22.9201 10.9193 22.9201 10.386 22.4134C10.2393 22.2667 10.0927 22.1334 9.94602 21.9867C8.57268 20.6001 7.33268 19.1467 6.22602 17.6267C5.13268 16.1067 4.25268 14.5867 3.61268 13.0801C2.98602 11.5601 2.66602 10.1067 2.66602 8.72008C2.66602 7.81341 2.82602 6.94675 3.14602 6.14675C3.46602 5.33341 3.97268 4.58675 4.67935 3.92008C5.53268 3.08008 6.46602 2.66675 7.45268 2.66675C7.82602 2.66675 8.19935 2.74675 8.53268 2.90675C8.87935 3.06675 9.18602 3.30675 9.42602 3.65341L12.5193 8.01342C12.7593 8.34675 12.9327 8.65341 13.0527 8.94675C13.1727 9.22675 13.2393 9.50675 13.2393 9.76008C13.2393 10.0801 13.146 10.4001 12.9593 10.7067C12.786 11.0134 12.5327 11.3334 12.2127 11.6534L11.1993 12.7067C11.0527 12.8534 10.986 13.0267 10.986 13.2401C10.986 13.3467 10.9993 13.4401 11.026 13.5467C11.066 13.6534 11.106 13.7334 11.1327 13.8134C11.3727 14.2534 11.786 14.8267 12.3727 15.5201C12.9727 16.2134 13.6127 16.9201 14.306 17.6267C14.4393 17.7601 14.586 17.8934 14.7193 18.0267C15.2527 18.5467 15.266 19.4001 14.7327 19.9334Z"
                  fill="#3D3D3D"/>
              <path
                  d="M29.2941 24.44C29.2941 24.8133 29.2274 25.2 29.0941 25.5733C29.0541 25.68 29.0141 25.7866 28.9608 25.8933C28.7341 26.3733 28.4408 26.8266 28.0541 27.2533C27.4008 27.9733 26.6808 28.4933 25.8674 28.8266C25.8541 28.8266 25.8408 28.84 25.8274 28.84C25.0408 29.16 24.1874 29.3333 23.2674 29.3333C21.9074 29.3333 20.4541 29.0133 18.9208 28.36C17.3874 27.7066 15.8541 26.8266 14.3341 25.72C13.8141 25.3333 13.2941 24.9466 12.8008 24.5333L17.1608 20.1733C17.5341 20.4533 17.8674 20.6666 18.1474 20.8133C18.2141 20.84 18.2941 20.88 18.3874 20.92C18.4941 20.96 18.6008 20.9733 18.7208 20.9733C18.9474 20.9733 19.1208 20.8933 19.2674 20.7466L20.2808 19.7466C20.6141 19.4133 20.9341 19.16 21.2408 19C21.5474 18.8133 21.8541 18.72 22.1874 18.72C22.4408 18.72 22.7074 18.7733 23.0008 18.8933C23.2941 19.0133 23.6008 19.1866 23.9341 19.4133L28.3474 22.5466C28.6941 22.7866 28.9341 23.0666 29.0808 23.4C29.2141 23.7333 29.2941 24.0666 29.2941 24.44Z"
                  fill="#292D32"/>
            </svg>
            اطلاعات تماس
          </h1>
          <p class="flex flex-row rtl leading-8 items-center gap-2 p-4 text-zahrat-darkgray text-[18px]">در صورت مغایرت
            اطلاعات تماس این فرم با اطلاعات درج شده در حساب کاربری، بلیط و تاییدیه خرید به اطلاعات تماس همین فرم ارسال
            خواهد شد. همچنین «اعلام تغییرات بلیط» یا «دریافت تاییدیه» از یکی از کانال‌های «اطلاعات تماس حساب کاربری» یا
            «اطلاعات همین فرم» صورت خواهد گرفت و علی‌بابا متعهد به برقراری ارتباط با یکی از این کانال‌هاست. خواهشمندیم
            هر دو کانال را در دسترس نگه دارید.</p>
        </div>
      </tr>
      </tbody>
    </table>
  </div>

</template>
<style scoped>

</style>
