<script setup>
import LinerDatePicker from '@/components/ui/inputs/linerDatePicker'
import FlightFilter from '@/components/ui/layout/cards/flight/flightFilter';
import ResultContainer from '@/components/ui/layout/resultContainer';
</script>
<template>
  <div class="mx-auto flex justify-center gap-5  mt-16">
    <flight-filter></flight-filter>
    <div>
      <liner-date-picker></liner-date-picker>
      <result-container></result-container>
    </div>
  </div>
</template>
<style scoped>

</style>
