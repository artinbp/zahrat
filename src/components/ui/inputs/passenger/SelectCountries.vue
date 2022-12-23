<script setup>
import data from '@/utils/datas/countries.json'
import { defineEmits, defineProps, onMounted, ref } from 'vue'
import store from '@/store'
import { useI18n } from 'vue-i18n';

const show = ref(false)
const value = ref()
const { t } = useI18n()
const obj = [
  { title: 'Iraq', value: 'IQ' },
  { title: 'land Islands', value: 'AX' },
  { title: 'Albania', value: 'AL' },
  { title: 'Algeria', value: 'DZ' },
  { title: 'American Samoa', value: 'AS' },
  { title: 'AndorrA', value: 'AD' }
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
  const res = data.filter((item) => {
    return item.title.toLowerCase().includes(title.value.toLowerCase()) || item.value?.toLowerCase().includes(title.value.toLowerCase())
  })
  console.log(res)
  objects.value = res.slice(0, 5)
  if (!title.value) {
    objects.value = obj
  }
}
const giveData = (e) => {
  console.log('giveDate ', e)
  value.value = e
  const search = data.filter((item) => {
    return item.value === value.value
  })
  console.log('giveDate search ', search[0])
  emit('search', search[0])
  title.value = search[0].title
  titleToggle.value = true
  arrowToggle.value = false
  show.value = false

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
  <label for="country" class="text-zahrat-gray absolute transition-all rounded-xl"
         :class="[titleToggle ? 'text-[14px] translate-y-[0.4rem] font-semibold -translate-x-4' : 'text-[20px] translate-y-[1.8rem] font-semibold -translate-x-4']"
         @click="focus">
    <span> {{ t('CustomerTable.SelectCountries') }} </span>
  </label>
  <form autocomplete="off">
    <div class="flex flex-col gap-1">
      <input
          v-model="title"
          type="text"
          id="country"
          :autocomplete="false"
          class="h-[80px] w-full pb-[0.28rem] p-[28px] text-zahrat-darkgray rounded-xl text-[20px] leading-[8rem] font-semibold"
          :onkeyup="setVal"
          @focus="focus"
          @blur="blur"
      >
      <div @click="show=false" v-show="show" class="fixed w-screen h-screen  left-0 top-0 right-0"></div>
    </div>
    <div
        class="absolute z-10 mt-2"
        v-if="show"
    >
      <div class="relative min-w-[303px] shadow-md sm:rounded-lg cursor-pointer">
        <table class="w-full text-sm text-left text-gray-500 ">
          <tbody>
          <tr class="bg-gray-50 flex flex-row-reverse justify-between border-b"
              v-for="(item,i) in objects"
              :key="i"
              @click="giveData(item.value)"
              @focus="show=false"
          >
            <th scope="row" class="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
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
  <span class="text-red-600" v-if="error.status">{{ error.title }}</span>
</template>
<style>

</style>
