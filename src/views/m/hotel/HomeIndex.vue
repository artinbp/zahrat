<script setup>
import banner from '@/assets/banner.jpg'

</script>
<template>
  <div class="w-auto h-[28rem] rtl rounded-xl flex flex-col justify-end" style="background-attachment: fixed;background-clip: content-box;background-position: bottom;background-size: cover" :style="'background-image: url(\''+banner+'\')'">
    <div class="mx-12 my-2 translate-y-14">
      <nav class="bg-white w-fit flex bg-gray-300 flex-row gap-1 rounded-t-lg">
        <router-link class=" px-4 py-2 rounded-t-lg " to="/flight">رحلة</router-link>
        <router-link class=" px-4 py-2 rounded-t-lg text-red-600 bg-white" to="/hotel">فنادق</router-link>
      </nav>
      <div class="grid grid-cols-3 p-4 gap-2 rounded-lg rounded-tr-none shadow-lg bg-white">
        <div>
          <city-search></city-search>
        </div>
        <div>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
          <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" required>
        </div>
        <div>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
          <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" required>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>
