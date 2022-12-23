<script setup>
import PayCheckout from '@/components/ui/templates/payCheckout.vue'
import PluxSteper from '@/components/ui/templates/PluxSteper';
import PayCheckData from '@/components/ui/templates/payCheckData';
console.log('hi')
</script>

<template>
  <div class="grid gap-5 grid-cols-1 px-[34px]">
    <div class="py-[56px]">
      <plux-steper step="payment"></plux-steper>
    </div>
    <div>
      <pay-check-data/>
    </div>
    <div>
      <PayCheckout/>
    </div>
  </div>
</template>
