<script setup>
import {leftArrow} from '@/assets/icons/js/light';
import PluxIcons from '@/components/ui/templates/PluxIcons';
</script>
<template>
  <div class="float-right w-fit flex flex-row mt-32">
    <div class="w-14 h-14 ml-2 float-left cursor-pointer">
      <button class="bg-zahrat-lightgray p-2 rounded-full border-zahrat-darkgray border">
        <PluxIcons :path="leftArrow" class="rotate-180 fill-zahrat-darkgray text-xl" view-box="0 0 24 24" size="30"></PluxIcons>
      </button>
    </div>
    <div class="w-14 h-14 float-left  cursor-pointer">
      <button class="bg-zahrat-darkgray p-2 rounded-full border-zahrat-darkgray border">
        <PluxIcons :path="leftArrow" class="rotate-0 fill-zahrat-lightgray text-xl" view-box="0 0 24 24" size="30"></PluxIcons>
      </button>
    </div>
  </div>
</template>
<style scoped>

</style>
