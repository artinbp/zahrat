<script setup>
import { defineProps } from 'vue';
defineProps({
  path: {
    type: String,
    required: true
  },
  w: {
    type: String,
    default: 'w-6'
  },
  h: {
    type: String,
    default: 'h-6'
  },
  size: {
    type: [String, Number],
    default: 20
  },viewBox:{
    type:String,
    default:'0 0 30 30'
  }
})
</script>
<template>
  <svg v-html="path" :width="size" :height="size" :viewBox="viewBox" fill="none" xmlns="http://www.w3.org/2000/svg">

  </svg>
</template>
<style scoped>

</style>
