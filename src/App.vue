<script setup>
import { onMounted } from 'vue';
import { device } from '@/utils/func/storeSearch';
onMounted(()=>{
  device()
})
</script>
<template>
  <router-view/>
</template>
<style>
</style>
