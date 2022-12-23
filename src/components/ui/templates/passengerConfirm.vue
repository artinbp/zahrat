<script setup>
import { currency } from '@/utils/func/storeSearch';
import PluxButton from '@/components/ui/inputs/PluxButton';
import {useRouter} from 'vue-router';
const router = useRouter()
const action = () => {
router.push('/flight/check')
}
</script>
<template>
  <div class="bg-[#fafafa] rounded-[24px] p-6 flex flex-row  justify-end gap-8 items-center ">
    <h1 class=" grow justify-start">با کلیک روی تایید و ادامه خرید با قوانین سایت و قوانین پرواز خارجی موافقت
      کرده‌اید.</h1>
    <h1 class="text-zahrat text-2xl font-semibold">{{ currency(1290000, 'IRR') }}</h1>
    <plux-button @action="action" type="empty" class="bg-zahrat hover:bg-zahrat-hover text-zahrat-bone rounded-[10px] p-4 px-6 ro">احجز
      الآن
    </plux-button>
  </div>
</template>

<style scoped>

</style>
