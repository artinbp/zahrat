<script setup>
import PluxSteper from '@/components/ui/templates/PluxSteper'
import RevalidatedTicket from '@/components/ui/layout/cards/flight/revalidatedTicket'
import CustomerTable from '@/components/ui/templates/CustomerTable';
import ContactComponent from '@/components/ui/templates/ContactComponent';
import PassengerConfirm from '@/components/ui/templates/passengerConfirm';

</script>
<template>
  <div class=" w-[1300px] flex mx-auto flex-col gap-y-12 justify-center">
    <plux-steper step="passenger"></plux-steper>
    <revalidated-ticket></revalidated-ticket>
    <customer-table></customer-table>
    <contact-component></contact-component>
    <passenger-confirm></passenger-confirm>
  </div>
</template>
<style scoped>

</style>
