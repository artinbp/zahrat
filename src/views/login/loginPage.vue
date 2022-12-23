<script setup>
import { ref } from 'vue';
import PluxButton from '@/components/ui/inputs/PluxButton.vue'
const passwordType = ref('password')
</script>
<template>
  <div class="flex h-screen flex-row rtl justify-center items-center">
    <div class="w-[500px] h-5/6 rounded-md bg-zahrat p-[24px] text-[45px] text-zahrat-bone pt-10 flex flex-col items-center justify-start">
      <h1> das ist ein teste</h1>
      <p class="text-[22px] text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eius modi officiis provident rerum. Alias harum nihil tempore? Blanditiis corporis laboriosam molestias numquam perferendis placeat possimus rem tempora tenetur vitae?</p>
    </div>
    <div class="w-[500px] h-[694px] gap-2 rounded-md p-[24px] text-[20px] text-slate-600 pt-32 flex flex-col items-center justify-start">
      <h1 class="text-[24px]">تسجیل الدخول</h1>
      <p class="text-[14px]">تسجیل ل قباسل</p>
      <div class="flex flex-col mt-6 justify-start items-start gap-4">
        <p class="text-[16px]">البرید الالکترونیکي</p>
        <input type="text" class="bg-[#fafafa] w-[380px] h-[40px] rounded-[10px] p-2 px-4">
      </div>
      <div class="flex flex-col justify-start items-start gap-4">
        <p class="text-[16px]">کلمة السر</p>
        <input :type="passwordType" class="bg-[#fafafa] w-[380px] h-[40px] rounded-[10px] p-2 px-4">
        <svg v-if="passwordType==='password'" class="-translate-x-[340px] -translate-y-[48px]" @click="passwordType='text'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5819 11.9999C15.5819 13.9799 13.9819 15.5799 12.0019 15.5799C10.0219 15.5799 8.42188 13.9799 8.42188 11.9999C8.42188 10.0199 10.0219 8.41992 12.0019 8.41992C13.9819 8.41992 15.5819 10.0199 15.5819 11.9999Z" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.9998 20.2697C15.5298 20.2697 18.8198 18.1897 21.1098 14.5897C22.0098 13.1797 22.0098 10.8097 21.1098 9.39973C18.8198 5.79973 15.5298 3.71973 11.9998 3.71973C8.46984 3.71973 5.17984 5.79973 2.88984 9.39973C1.98984 10.8097 1.98984 13.1797 2.88984 14.5897C5.17984 18.1897 8.46984 20.2697 11.9998 20.2697Z" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-if="passwordType==='text'" class="-translate-x-[340px] -translate-y-[48px]" @click="passwordType='password'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.5319 9.46992L9.47188 14.5299C8.82188 13.8799 8.42188 12.9899 8.42188 11.9999C8.42188 10.0199 10.0219 8.41992 12.0019 8.41992C12.9919 8.41992 13.8819 8.81992 14.5319 9.46992Z" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M17.8198 5.77047C16.0698 4.45047 14.0698 3.73047 11.9998 3.73047C8.46984 3.73047 5.17984 5.81047 2.88984 9.41047C1.98984 10.8205 1.98984 13.1905 2.88984 14.6005C3.67984 15.8405 4.59984 16.9105 5.59984 17.7705" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.42188 19.5297C9.56187 20.0097 10.7719 20.2697 12.0019 20.2697C15.5319 20.2697 18.8219 18.1897 21.1119 14.5897C22.0119 13.1797 22.0119 10.8097 21.1119 9.39969C20.7819 8.87969 20.4219 8.38969 20.0519 7.92969" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.5114 12.7002C15.2514 14.1102 14.1014 15.2602 12.6914 15.5202" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.47 14.5303L2 22.0003" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22.0013 2L14.5312 9.47" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <p class="text-blue-600 -translate-y-4 self-start mx-10">هل نسيت كلمة المرور؟</p>
      <plux-button type="default" class="rounded-[10px] w-[380px] flex flex-row justify-center">تسجيل الدخول</plux-button>
    </div>
  </div>
</template>
<style scoped>

</style>
