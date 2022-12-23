<script setup>
import { computed, defineProps } from 'vue'
const props = defineProps(['popup', 'close'])
const popup = computed(() => props.popup)
</script>
<template>
  <div class="popup" v-if="popup">
    <div class="closer" @click="props.close">
    </div>
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.popup {
  @apply fixed left-0 right-0 top-0 bottom-0 h-screen w-full overscroll-y-auto overscroll-x-none z-40 bg-[#4440];
  .closer {
    @apply fixed left-0 right-0 top-0 bottom-0 h-screen w-screen z-50 bg-[#4444] backdrop-blur-sm;
  }
}
</style>
