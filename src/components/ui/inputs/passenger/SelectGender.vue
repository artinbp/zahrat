<script setup>

import { defineEmits, defineProps, onMounted, ref } from 'vue'
import { checkRTL } from '@/utils/func/storeSearch';
import store from '@/store'
import { useI18n } from 'vue-i18n';

const show = ref(false)
const value = ref()
const { t } = useI18n()
const obj = [
  { title: 'men', value: 'male' },
  { title: 'women', value: 'female' }
]
onMounted(() => {
  if (store.getters.getPassenger[props.index]?.country) {
    title.value = store.getters.getPassenger[props.index]?.country?.name
  } else {
    title.value = ''
  }
})
const emit = defineEmits(['search'])
const objects = ref(obj)
const titleToggle = ref(false)
const arrowToggle = ref(false)
const props = defineProps(['placeholder', 'error', 'index'])
const title = ref('')
const setVal = () => {
  const res = obj.filter((item) => {
    return item.title.toLowerCase().includes(title.value.toLowerCase()) || item.value?.toLowerCase().includes(title.value.toLowerCase())
  })
  console.log(res)
  objects.value = res
  if (!title.value) {
    objects.value = obj
  }
}
const giveData = (e) => {
  console.log('giveDate ', e)
  value.value = e
  const search = obj.filter((item) => {
    return item.value === value.value
  })
  console.log('giveDate search ', search[0])
  emit('search', search[0])
  title.value = search[0].title
  show.value = false
  titleToggle.value = true
  arrowToggle.value = false
}

function focus () {
  titleToggle.value = true
  show.value = true
  arrowToggle.value = true
}

function blur () {
  if (!(title.value.toString().length > 0)) {
    return titleToggle.value = false
  }
  arrowToggle.value = false
  return titleToggle.value = true
}
</script>
<template>
  <label
      :class="[titleToggle ? 'text-[14px] translate-y-[0.4rem] font-semibold -translate-x-4' : 'text-[20px] translate-y-[1.8rem] font-semibold -translate-x-4']"
      class="text-zahrat-gray absolute transition-all rounded-xl"
      for="gender"
      @click="focus">
    <span> {{ t('CustomerTable.gender') }} </span>
  </label>
  <svg :class="titleToggle?'rotate-180':''" class="absolute translate-y-[1.7rem] -translate-x-[15rem] transition-all"
       fill="none" height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.44055 12L14.1339 20.6934C15.1605 21.72 16.8405 21.72 17.8672 20.6934L26.5605 12" stroke="#3D3D3D"
          stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.5"/>
  </svg>
  <form autocomplete="off">
    <div class="flex flex-col gap-1">
      <input
          id="gender"
          v-model="title"
          :autocomplete="false"
          :onkeyup="setVal"
          :style="checkRTL()?  'background-position: left 0.5rem center;':''"
          class="h-[80px] w-full pb-[0.28rem] p-[28px] text-zahrat-darkgray rounded-xl text-[20px] leading-[8rem] font-semibold"
          type="text"
          @blur="blur"
          @focus="focus"
      >
      <div v-show="show" class="fixed w-screen h-screen  left-0 top-0 right-0" @click="show=false"></div>
    </div>
    <div
        v-if="show"
        class="absolute z-10 mt-2"
    >
      <div class="relative min-w-[303px] shadow-md sm:rounded-lg cursor-pointer">
        <table class="w-full text-sm  text-gray-500 ">
          <tbody>
          <tr v-for="(item,i) in objects"
              :key="i"
              class="bg-gray-50 flex flex-row items-center justify-between border-b"
              @click="giveData(item.value)"
              @focus="show=false"
          >
            <th class="px-6 py-4 font-medium text-gray-900  whitespace-nowrap" scope="row">
              {{ item.title }}
            </th>
            <td class="px-6 py-4">
              {{ item.value }}
            </td>
          </tr>

          </tbody>
        </table>
      </div>
    </div>
  </form>
</template>
<style>

</style>
