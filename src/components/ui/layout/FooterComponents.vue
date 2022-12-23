<template>
  <div class="pt-14 pb-20 mt-32 h-footH bg-cardC">
    <div class="mx-auto flex items-center gap-2 justify-center">
      <img :src="loc" alt="" class="w-7">
      <span class="text-2xl font-semibold ml-5 ">عنوان: </span>
    </div>
    <div class="mx-auto mt-10 flex items-center gap-2 justify-center">
      <img :src="call" alt="" class="w-7">
      <span class="text-2xl font-semibold ml-5 ">رقم الهاتف : </span>
    </div>
    <div class="mx-auto mt-10 flex items-center gap-2 justify-center">
      <img :src="mail" alt="" class="w-7">
      <span class="text-2xl font-semibold ml-5 ">البريد الااکترونيکية : </span>
    </div>
    <div class="mx-auto mt-24 flex items-center gap-6 justify-center ">
      <a href="#">
        <div>
          <img :src="face" alt="" class="h-10 mx-auto">
          <span class="mt-1 text-xs font-semibold text-faceC">فيسبوك</span>
        </div>
      </a>
      <a href="#">
        <div>
          <img :src="insta" alt="" class="h-10 mx-auto">
          <span class="mt-1 text-xs font-semibold">انستغرام</span>
        </div>
      </a>
      <a href="#">
        <div>
          <img :src="teleg" alt="" class="h-10 mx-auto">
          <span class="mt-1 text-xs font-semibold text-telegC">تلغرام</span>
        </div>
      </a>
      <a href="#">
        <div>
          <img :src="linkd" alt="" class="h-10 mx-auto">
          <span class="mt-1 text-xs font-semibold text-linkdC">لينكدين</span>
        </div>
      </a>
    </div>
  </div>
  <CopyRight>
  </CopyRight>
</template>
<script setup>
import loc from '@/assets/loc.svg'
import call from '@/assets/call.svg'
import mail from '@/assets/mail.svg'
import face from '@/assets/face.svg'
import teleg from '@/assets/teleg.svg'
import insta from '@/assets/insta.svg'
import linkd from '@/assets/linkd.svg'
import CopyRight from '@/components/ui/layout/CopyRight.vue'
</script>
<style scoped>

</style>
