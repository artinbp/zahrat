<script setup>
import { defineProps, defineEmits, ref } from 'vue';
const props = defineProps({
  title: {
    type: String
  },
  id: {
    type: String
  },
  disable: {
    type: Boolean
  },
  error: {
    type: Boolean
  },
  index: {
    type: Number
  },
  list: {
    type: Array
  },
  errorTitle: {
    type: String
  }
})
const emit = defineEmits(['value'])
const titleToggle = ref(false)
const listToggle = ref(false)
const values = ref()
const search =  ref(props.list)
const inputValue = ref()
const inputFocus = () => {
  titleToggle.value = true
}
const inputBlur = () => {
  if(!(inputValue.value.value.toString().length > 0)){
    return titleToggle.value = false
  }
  return titleToggle.value = true
}
const value = (e) => {
  if(inputValue.value.value.length > 0){
    titleToggle.value = true
  }
  if (props.list){
    search.value = props.list.filter((item) => {
      return item.value.toLowerCase().includes(inputValue.value.value.toLowerCase())  || item.title.toLowerCase().includes(inputValue.value.value.toLowerCase())
    })
    if (e.keyCode === 13) {
      emit('value', search.value[0], props.index)
      inputValue.value = search.value[0].title
      values.value = search.value[0].value
    }
  }else {
    if (e.keyCode === 13) {
      values.value = inputValue.value
      emit('value', values.value, props.index)
    }
  }
}
const changeData = (e) => {

  inputValue.value.value = e.title
  listToggle.value = false
  values.value = e.value
  titleToggle.value = true
  inputValue.value.value = e.title
  emit('value', values.value, inputValue.value, props.index)
  emit('enter', e, props.index)
  value()
  console.log(inputValue.value)
}
</script>
<template>
  <div class="rtl rounded-xl">
    <span class="text-zahrat-gray absolute transition-all rounded-xl"
          :class="[titleToggle ? 'text-[14px] translate-y-[0.4rem] font-semibold -translate-x-4' : 'text-[20px] translate-y-[1.8rem] font-semibold -translate-x-4']" @click="inputFocus">{{ props.title }}</span>
    <div class="h-[80px] bg-white rounded-xl">
      <input class="h-full w-full pb-[0.28rem] p-[28px] rounded-xl text-[20px] leading-[8rem] font-semibold"
             :class="[error? 'outline outline-2 outline-zahrat-orange':'']"
             ref="inputValue"
             @focus="inputFocus"
             @click="listToggle=!listToggle"
             @blur="inputBlur"
             @keyup="value"
             @change="value"
             :id="props.id+props.index"
             type="text">
    </div>
    <ul class="absolute border overflow-y-scroll shadow-xl rounded-xl max-h-[19rem] w-[364px] z-50"
        v-if="list && listToggle">
      <li v-for="(data, i) in search" @click="changeData(data)"
          class="bg-white cursor-pointer p-5 hover:bg-gray-100"
          :key="i">
        {{ data.title }}
      </li>
    </ul>
    <span v-if="error" class="p-2 py-3 text-[15px] font-semibold text-zahrat-orange flex flex-row items-center gap-2">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 9V14" stroke="#EE6400" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9994 21.41H5.93944C2.46944 21.41 1.01944 18.93 2.69944 15.9L5.81944 10.28L8.75944 5.00003C10.5394 1.79003 13.4594 1.79003 15.2394 5.00003L18.1794 10.29L21.2994 15.91C22.9794 18.94 21.5194 21.42 18.0594 21.42H11.9994V21.41Z" stroke="#EE6400" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9941 17H12.0031" stroke="#EE6400" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      {{ errorTitle }}</span>
  </div>
</template>
<style scoped>

</style>
