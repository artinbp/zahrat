<script setup>
import CustomerCheckout from '@/components/ui/templates/CustomerCheckout.vue'
import LastCheckout from '@/components/ui/templates/LastCheckout.vue'
import PluxSteper from '@/components/ui/templates/PluxSteper';
import LastCheckData from '@/components/ui/templates/lastCheckData';
import ContactCheckOut from '@/components/ui/templates/ContactCheckOut';
import OfferLastCode from '@/components/ui/templates/offerLastCode';

console.log('hi')
</script>

<template>

  <div class="grid gap-5 grid-cols-1">
    <div class="py-[56px]">
      <plux-steper step="confirm"></plux-steper>
    </div>
    <div>
      <last-check-data/>
    </div>
    <div>
      <CustomerCheckout/>
    </div>
    <div>
      <contact-check-out></contact-check-out>
    </div>
    <div>
      <offer-last-code></offer-last-code>
    </div>
    <div>
      <LastCheckout/>
    </div>
  </div>
</template>
