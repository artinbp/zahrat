<script setup>
import {useI18n} from 'vue-i18n';
import { ref } from 'vue';
import store from '@/store';
const { t } = useI18n()
const sortList = [
  {
    title: t('Actions.sortBy') + ' ' + t('sort.lowPrice'),
    action: () => {
      store.dispatch('sortFlightLowPrice')
      popup.value = false
      selected.value = t('Actions.sortBy') + ' ' + t('sort.lowPrice')
    }
  },
  {
    title: t('Actions.sortBy') + ' ' + t('sort.highPrice'),
    action: () => {
      store.dispatch('sortFlightHighPrice')
      popup.value = false
      selected.value = t('Actions.sortBy') + ' ' + t('sort.highPrice')
    }
  },
  {
    title: t('Actions.sortBy') + ' ' + t('sort.nearestTime'),
    action: () => {
      // store.dispatch('sortFlight')
      popup.value = false
      selected.value = t('Actions.sortBy') + ' ' + t('sort.nearestTime')
    }
  },
  {
    title: t('Actions.sortBy') + ' ' + t('sort.latestTime'),
    action: () => {
      // store.dispatch('sortFlight')
      popup.value = false
      selected.value = t('Actions.sortBy') + ' ' + t('sort.latestTime')
    }
  }
]
const selected = ref(t('Actions.sortBy') + ' ' + t('sort.lowPrice'))
const popup = ref(false)
</script>
<template>

  <div>
    <div
        @click="popup = true"
        class="h-12 w-[13.188rem] text-zahrat-darkgray rounded-[0.625rem] border-[0.094rem] p-2 border-[rgba(61, 61, 61, 0.3)] flex flex-row-reverse justify-between items-center cursor-pointer">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6004 7.49997L11.1671 12.9333C10.5254 13.575 9.47539 13.575 8.83372 12.9333L3.40039 7.49997"
              stroke="#3D3D3D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
              stroke-linejoin="round" />
      </svg>

      <span class="text-sm font-medium leading-[1.313rem]">{{ selected }}</span>
    </div>
    <ul v-if="popup" class="absolute z-20 text-zahrat-darkgray translate-y-2 bg-white w-[13.188rem] shadow-md rounded-[10px] select-none">
      <li v-for="(item, i) in sortList"
          :key="i"
          @click="item.action()"
          class="p-2 rounded-[10px] text-[14px] hover:bg-zahrat-bone cursor-pointer active:bg-[#eee]"
      >{{ item.title }}</li>
    </ul>
  </div>

</template>
