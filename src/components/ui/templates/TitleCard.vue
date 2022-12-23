<script setup>
import {defineProps} from 'vue';
defineProps({
  title: {
    type: String,
    required: true,
    default: 'al zahrat'
  },
  desc: {
    type: String,
    required: true,
    default: 'best site in the world'
  }
})
</script>
<template>
  <div class="mx-2 grow w-full text-right mt-32">
    <div class="font-bold text-4xl text-right text-blackFont">{{ title }}</div>
    <div class="mt-4 font-normal text-right text-blackFont">{{ desc }}</div>
  </div>
</template>
<style scoped>

</style>
