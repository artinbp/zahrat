<template>
  <div class="flex flex-row px-24">
    <title-card title="لماذا يجب عليك إختيارنا" desc=""></title-card>
  </div>
  <div class="mx-auto w-[1380px] mt-28 flex items-center justify-between">
    <div class="h-cardH w-80 scale-95 hover:scale-110 transition-all rounded-2xl">
      <img :src="v1" alt="" class="h-28 mx-auto">
      <div class="font-bold text-3xl text-blackFont text-center mt-9">خبرة</div>
      <div class="mt-4 font-normal text-l text-blackFont text-center leading-8 mt-9">أكثر من نصف قرن من الخبرة في تقديم الخدمات السياحية وبيع التذاكر وتقديم الجولات وإصدار التأشيرات في إيران وخارجها      </div>
    </div>
    <div class="h-cardH w-80 scale-95 hover:scale-110 transition-all rounded-2xl">
      <img :src="v2" alt="" class="h-28 mx-auto">
      <div class="font-bold text-3xl text-blackFont text-center mt-9">افضل سعر</div>
      <div class="mt-4 font-normal text-l text-blackFont text-center leading-8 mt-9">بحث قصير يؤكد لك أن أسعارنا والخدمات التي نقدمها هي الأنسب والأفضل.
      </div>
    </div>
    <div class="h-cardH w-80 scale-95 hover:scale-110 transition-all rounded-2xl">
      <img :src="v3" alt="" class="h-28 mx-auto">
      <div class="font-bold text-3xl text-blackFont text-center mt-9">دعم 24 ساعة</div>
      <div class="mt-4 font-normal text-l text-blackFont text-center leading-8 mt-9">في أي وقت من 24 ساعة في اليوم وأينما كنت في العالم ، سترانا من خلال الدردشة والمكالمات الهاتفية حتى تكون متأكدًا من شرائك.      </div>
    </div>
    <div class="h-cardH w-80 scale-95 hover:scale-110 transition-all rounded-2xl">
      <img :src="v4" alt="" class="h-28 mx-auto">
      <div class="font-bold text-3xl text-blackFont text-center mt-9">حماية</div>
      <div class="mt-4 font-normal text-l text-blackFont text-center leading-8 mt-9">يتم فحص جميع خدماتنا من مرحلة البحث إلى مرحلة الشراء بعناية خاصة ، وفي حالة حدوث أي أخطاء ناتجة عن عملنا ، فسنقوم بتعويض جميع الأضرار التي لحقت بك.
      </div>
    </div>
  </div>
</template>
<script setup>
import v1 from '@/assets/r1.svg'
import v2 from '@/assets/r2.svg'
import v3 from '@/assets/r3.svg'
import v4 from '@/assets/r4.svg'
import TitleCard from '@/components/ui/templates/TitleCard.vue'
</script>
<style scoped>

</style>
