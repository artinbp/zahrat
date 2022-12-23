<script setup>
import { defineProps } from 'vue'
import PluxIcons from '@/components/ui/templates/PluxIcons';
import { phone } from '@/assets/icons/js/light';
import PluxButton from '@/components/ui/inputs/PluxButton';
import {siteData} from '@/config';

defineProps(['items'])
</script>
<template>
  <nav class="rtl relative h-14 max-w-[1200px] mx-auto flex items-center text-zahrat-darkgray justify-between gap-2 mt-[2.5rem]">
    <div class="flex items-center justify-between">
      <div class="flex items-center justify-between">
        <router-link to="/" class="text-zahrat font-semibold text-2xl">{{ siteData.brandName }}</router-link>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <a href="tel:078111111" class="flex flex-row text-2xl gap-2 items-center">078111111
        <plux-icons :path="phone" size="30" class="fill-zahrat-darkgray"></plux-icons>
      </a>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-center text-[18px] laptop:text-[14px] laptop-mini:text-[13px] justify-between gap-16 laptop:gap-14 laptop-mini:gap-8">
        <router-link v-for="(item, i) in items" :key="i" :to="item.to">{{ item.title }}</router-link>
      </div>
    </div>
    <plux-button class="border-2 border-[#C02320] w-44 h-14 flex flex-col justify-center items-center rounded-xl text-[#C02320] hover:bg-[#C02320] hover:text-white font-semibold" type="empty">
      دخول/ سجل
    </plux-button>
  </nav>
</template>
<style scoped>

</style>
