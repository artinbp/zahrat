<script setup>
import { computed, defineProps, defineEmits } from 'vue';
const defaultClasses = {
  default: 'text-[14px] bg-zahrat border-zahrat border-2 py-[10px] px-[16px] text-white active:scale-95 hover:bg-zahrat-hover',
  disable: 'text-[14px] bg-zahrat-gray border-zahrat-gray border-2 py-[10px]  rounded-[8px] px-[16px] text-zahrat-lightgray cursor-default',
  success: 'text-[14px] bg-zahrat border-zahrat border-2 py-[10px]  rounded-[8px] px-[16px] text-white active:scale-95 hover:bg-zahrat-hover',
  await: 'text-[14px] bg-zahrat-rose border-zahrat-rose stroke-zahrat hover:stroke-zahrat-bone border-2 py-[10px]  rounded-[8px] px-[16px] text-zahrat active:scale-95 hover:bg-zahrat hover:border-zahrat hover:text-white',
  failed: 'text-[14px] bg-zahrat-rose border-zahrat-rose border-2 py-[10px]  rounded-[8px] px-[16px] text-white active:scale-95 hover:bg-zahrat hover:border-zahrat hover:text-white',
  liner: 'text-[14px] border-zahrat border-2 py-[10px] rounded-[8px] px-[16px] text-zahrat active:scale-95 hover:bg-zahrat hover:border-zahrat hover:text-white',
  empty: ' active:scale-95'
}
const props = defineProps({
  type:{
    type: String,
    default: 'default'
  },
  class: {
    type: String
  }
})
const typeClass = computed(() => defaultClasses[props.type])
const emit = defineEmits(['action'])
</script>
<template>
  <button :class="`${props.class} ${typeClass} flex flex-row items-center gap-2`"  @click="emit('action')"><slot></slot></button>
</template>
<style scoped>

</style>
