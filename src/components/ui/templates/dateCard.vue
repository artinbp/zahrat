<script setup>
import { defineProps } from 'vue'
import {setWeek} from '@/utils/func/storeSearch'
const props = defineProps({
  date: String,
  price: String,
  priceColor: String
})

</script>
<template>

  <div class="h-28 rounded-2xl cursor-pointer overflow-hidden">
        <span class="block text-center text-xl font-semibold leading-[1.513rem] text-[#3D3D3D] mt-[1.125rem]">{{ new Date(props.date).getDate() }}</span>
    <span class="block text-center text-lg font-medium leading-[1.361rem] text-[rgba(61,61,61,0.7)] mt-1">{{
        setWeek(new Date(props.date).getDay())
      }}</span>
    <span :class="'block text-center text-lg font-semibold leading-[1.513rem] mt-1 ' + priceColor">{{
        props.price
      }}</span>
  </div>

</template>
