<script setup>
import NavbarComponent from '@/components/ui/layout/NavbarComponent.vue'
import FooterComponents from '@/components/ui/layout/FooterComponents.vue'
import {menu} from '@/utils/menu/index';
</script>
<template>
  <div class="mt-6 rtl mx-[10px]">
    <navbar-component :items="menu">
    </navbar-component>
    <router-view />
    <footer-components></footer-components>
  </div>
</template>
<style scoped>

</style>
