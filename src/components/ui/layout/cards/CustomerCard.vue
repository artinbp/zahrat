<script setup>
import { computed, defineProps, ref } from 'vue'
import { domesticFlightChecker } from '@/utils/func/storeSearch'
import store from '@/store'
import { useI18n } from 'vue-i18n'
import SelectCountries from '@/components/ui/inputs/passenger/SelectCountries.vue'
import DateSelect from '@/components/ui/inputs/passenger/DateSelect';
import SelectGender from '@/components/ui/inputs/passenger/SelectGender';
// import DateSelect from '@/components/ui/select/DateSelect'
const { t } = useI18n()
const props = defineProps(['index', 'client'])
const Customers = computed(() => store.getters.getPassenger)

function countries (search) {
  if (search.code === 'IR' && domesticFlightChecker(store.getters.getorigin, store.getters.getdestination)) {
    Customers.value[props.index].codetype = 'National'
  } else {
    Customers.value[props.index].codetype = 'Passport'
  }
  Customers.value[props.index].country = search
  firstnameInput.value.focus()
}

function gender (search) {

  Customers.value[props.index].gender = search
  firstnameInput.value.focus()
}

const onFirstChange = (e) => {
  if (e.keyCode === 13) {
    lastnameInput.value.focus()
  }
}
const onLastChange = (e) => {
  if (e.keyCode === 13) {
    document.getElementById('gender').focus()
  }
}
const onPassportChange = (e) => {
  if (e.keyCode === 13) {
    birthDate.value.focus()
  }
}
const onBirthDate = (e) => {
  if (e.keyCode === 13) {
    birthDate.value.focus()
  }
}

const titleFirstToggle = ref(false)
const titleLastToggle = ref(false)
const titleCodeToggle = ref(false)

function focusFirst () {
  titleFirstToggle.value = true
}

function blurFirst () {
  if (!(firstnameInput.value.value.toString().length > 0)) {
    return titleFirstToggle.value = false
  }
  return titleFirstToggle.value = true
}

function focusLast () {
  titleLastToggle.value = true
}

function blurLast () {
  if (!(lastnameInput.value.value.toString().length > 0)) {
    return titleLastToggle.value = false
  }
  return titleLastToggle.value = true
}

function focusCode () {
  titleCodeToggle.value = true
}

function blurCode () {
  if (!(passengerCodeInput.value.value.toString().length > 0)) {
    return titleCodeToggle.value = false
  }
  return titleCodeToggle.value = true
}

const firstnameInput = ref()
const lastnameInput = ref()
const passengerCodeInput = ref()
const birthDate = ref()
const expireDate = ref()
const Errors = computed(() => store.getters.getPassengerError.customers[props.index])
console.log(Errors.value, Customers.value)
</script>
<template>
  {{ t(Customers[index].usertype) }}
  <div class="px-2 pb-4">
    <div class="grid grid-cols-2 gap-2 pb-6 " :class="`${'text-right rtl'}`">
      <div class="col-span-1">
        <p class="text-lg dark:text-white">{{ (index + 1) }} <span
            class="text-zahrat-slate text-2xl font-semibold font-medium mr-2 translate-x-5 py-0.5 rounded"> {{
            t(Customers[index].usertype)
          }}</span>
        </p>
      </div>
      <div :class="`${'text-left rtl'}`">
        <button type="button" @click="store.commit('deleteCustomer',props?.index)" v-if="!(index===0)"
                :class="`${index===0 ? 'cursor-not-allowed bg-red-400':''}`"
                class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 "
                :disabled="index===0">
          <p class="text-l dark:text-white  "> {{ t('Actions.Delete') }} {{ t('Customers') }} </p>
        </button>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-2 text-zahrat-darkgray" :class="`${'text-right rtl'}`">
      <div>
        <select-gender @search="gender" :placeholder="t('CustomerTable.gender')" :index="index"></select-gender>
      </div>
      <div>
        <label for="first_name" class="text-zahrat-gray absolute transition-all rounded-xl"
               :class="[titleFirstToggle ? 'text-[14px] translate-y-[0.4rem] font-semibold -translate-x-4' : 'text-[20px] translate-y-[1.8rem] font-semibold -translate-x-4']"
               @click="focusFirst">
          <span> {{ t('CustomerTable.firstname') }} </span>
        </label>
        <input v-model="Customers[index].firstname" type="text" id="first_name"
               class="h-[80px] w-full pb-[0.28rem] p-[28px] rounded-xl text-[20px] leading-[8rem] font-semibold"
               :class="[Errors?.firstName?.status? 'outline outline-2 outline-zahrat-orange':'']"
               ref="firstnameInput"
               @keyup="onFirstChange"
               @focus="focusFirst"
               @blur="blurFirst"
               required>
      </div>
      <span class="text-red-600"
            v-if="Errors?.firstName?.status">{{ Errors.firstName.type + ' ' + Errors.firstName.title }}</span>
      <div>
        <label for="last_name" class="text-zahrat-gray absolute transition-all rounded-xl"
               :class="[titleLastToggle ? 'text-[14px] translate-y-[0.4rem] font-semibold -translate-x-4' : 'text-[20px] translate-y-[1.8rem] font-semibold -translate-x-4']"
               @click="focusLast">
          <span> {{ t('CustomerTable.lastname') }} </span>
        </label>
        <input v-model="Customers[index].lastname" type="text" id="last_name"
               class="h-[80px] w-full pb-[0.28rem] p-[28px] rounded-xl text-[20px] leading-[8rem] font-semibold"
               :class="[Errors.lastName.status? 'outline outline-2 outline-zahrat-orange':'']"
               ref="lastnameInput"
               @keyup="onLastChange"
               @focus="focusLast"
               @blur="blurLast"
               required>
        <span class="text-red-600" v-if="Errors.lastName.status">{{
            Errors.lastName.type + ' ' + Errors.lastName.title
          }}</span>
      </div>
      <div>
        <SelectCountries @search="countries"
                         :error="{title:Errors?.countryCode?.type + ' ' + Errors?.countryCode?.title,status:Errors?.countryCode?.status}"
                         :placeholder="t('CustomerTable.country')" :index="index"/>
      </div>
      <div class="pt-6">
        <label for="passport"
               class="text-zahrat-gray absolute transition-all rounded-xl"
               :class="[titleCodeToggle ? 'text-[14px] translate-y-[0.4rem] font-semibold -translate-x-4' : 'text-[20px] translate-y-[1.8rem] font-semibold -translate-x-4']"
               @click="focusCode">
          <span> {{
              Customers[index].codetype === 'Passport' ? t('CustomerTable.PassportCode') : t('CustomerTable.NationalCode')
            }} </span>
        </label>
        <input
            v-model="Customers[index].code"
            type="text"
            class="w-full pb-[0.28rem] h-[80px] p-[28px] rounded-xl text-[20px] leading-[8rem] font-semibold"
            :class="[Errors.passengerCode.status? 'outline outline-2 outline-zahrat-orange':'']"
            ref="passengerCodeInput"
            id="passport"
            @keyup="onPassportChange"
            @change="onPassportChange"
            @focus="focusCode"
            @blur="blurCode"
            required>
        <span class="text-red-600" v-if="Errors.passengerCode.status">{{
            Errors.passengerCode.type + ' ' + Errors.passengerCode.title
          }}</span>
      </div>

      <div>
        <label for="passport"
               class="flex flex-row justify-between items-center px-1 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          <span>{{ t('CustomerTable.birthday') }} </span>
        </label>
        <date-select @action="onBirthDate"></date-select>
        <span class="text-red-600"
              v-if="Errors.birthDate.status">{{ Errors.birthDate.type + ' ' + Errors.birthDate.title }}</span>
      </div>
      <div v-if="Customers[index].codetype==='Passport'">
        <label for="passport"
               class="flex flex-row justify-between items-center px-1 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          <span>{{ t('CustomerTable.PassportExpireDate') }} </span>
        </label>
        <date-select type="expire" @action="expireDate"></date-select>
        <span class="text-red-600" v-if="Errors.passportExpire.status">{{
            Errors.passportExpire.type + ' ' + Errors.passportExpire.title
          }}</span>
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>
