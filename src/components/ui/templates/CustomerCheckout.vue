<template>
  <div class="relative bg-[#fafafa] shadow-md rounded-[24px]">
    <table class="w-full text-gray-500 ">
      <thead class="text-gray-900 ">
        <tr>
        <th scope="col" class=" p-[56px] flex flex-row justify-between items-center">
          <p class="text-[24px] flex flex-row items-center gap-5" :class="`${checkRTL()?'text-right':'text-left'}`">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9993 2.66675C8.50602 2.66675 5.66602 5.50675 5.66602 9.00008C5.66602 12.4267 8.34602 15.2001 11.8393 15.3201C11.946 15.3067 12.0527 15.3067 12.1327 15.3201C12.1594 15.3201 12.1727 15.3201 12.1993 15.3201C12.2127 15.3201 12.2127 15.3201 12.226 15.3201C15.6393 15.2001 18.3194 12.4267 18.3327 9.00008C18.3327 5.50675 15.4927 2.66675 11.9993 2.66675Z" fill="#3D3D3D"/>
              <path d="M18.7733 18.8666C15.0533 16.3866 8.98661 16.3866 5.23995 18.8666C3.54661 19.9999 2.61328 21.5333 2.61328 23.1733C2.61328 24.8133 3.54661 26.3333 5.22661 27.4533C7.09328 28.7066 9.54661 29.3333 11.9999 29.3333C14.4533 29.3333 16.9066 28.7066 18.7733 27.4533C20.4533 26.3199 21.3866 24.7999 21.3866 23.1466C21.3733 21.5066 20.4533 19.9866 18.7733 18.8666Z" fill="#3D3D3D"/>
              <path d="M26.6525 9.78664C26.8658 12.3733 25.0258 14.64 22.4792 14.9466C22.4658 14.9466 22.4658 14.9466 22.4525 14.9466H22.4125C22.3325 14.9466 22.2525 14.9466 22.1858 14.9733C20.8925 15.04 19.7058 14.6266 18.8125 13.8666C20.1858 12.64 20.9725 10.8 20.8125 8.79997C20.7192 7.71997 20.3458 6.7333 19.7858 5.8933C20.2925 5.63997 20.8792 5.47997 21.4792 5.42664C24.0925 5.19997 26.4258 7.14664 26.6525 9.78664Z" fill="#3D3D3D"/>
              <path d="M29.321 22.1201C29.2143 23.4135 28.3876 24.5335 27.001 25.2935C25.6676 26.0268 23.9876 26.3735 22.321 26.3335C23.281 25.4668 23.841 24.3868 23.9476 23.2401C24.081 21.5868 23.2943 20.0001 21.721 18.7335C20.8276 18.0268 19.7876 17.4668 18.6543 17.0535C21.601 16.2001 25.3076 16.7735 27.5876 18.6135C28.8143 19.6001 29.441 20.8401 29.321 22.1201Z" fill="#3D3D3D"/>
            </svg>
            {{ t('CustomerDetail') }}</p>
          <button @click="$router.push('/flight/get-passenger')"
                  class="border border-zahrat text-[16px] active:scale-95 hover:bg-zahrat hover:text-zahrat-bone  rounded-md text-zahrat p-[16px] px-[37px]">
            {{ t('Actions.Edit') }}
            {{ t('Customers') }}
          </button>
        </th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td class="p-[56px]">
            <div class="w-full text-[14px] text-gray-900 border rounded-[24px]">
              <table class="w-full">
                <thead>
                <tr class="text-gray-900">
                  <th scope="col" class="p-[25px]  rounded-tr-[24px] bg-white">
                    {{ t('CustomerTable.usertype') }}
                  </th>
                  <th scope="col" class="p-[25px] bg-white">
                    {{ t('CustomerTable.firstname') }} & {{ t('CustomerTable.lastname') }}
                  </th>
                  <th scope="col" class="p-[25px] bg-white">
                    {{ t('CustomerTable.gender') }}
                  </th>
                  <th scope="col" class="p-[25px] bg-white">
                    {{ t('CustomerTable.PassportCode') + ' | ' + t('CustomerTable.PassportCode') }}
                  </th>
<!--                  <th scope="col" class="p-[25px] bg-white">-->
<!--                    {{ t('CustomerTable.PassportExpireDate') }}-->
<!--                  </th>-->
                  <th scope="col" class="p-[25px] bg-white">
                    {{ t('CustomerTable.country') }}
                  </th>
                  <th scope="col" class="p-[25px] bg-white ">
                    {{ t('CustomerTable.birthday') }}
                  </th>
                  <th scope="col" class="p-[25px] bg-white rounded-tl-[24px]">
                    {{ t('PriceDetails') }}
                  </th>
                  <!--              <th scope="col" class="px-6 py-3">-->
                  <!--              {{ t('CustomerTable.codetype') }}-->
                  <!--            </th>-->
                </tr>
                </thead>
                <tbody>
                <tr
                    v-for="(client, index) in items"
                    :key="index"
                    class=""
                >
                  <td class="px-6 py-4">
                    {{ t(client.usertype) }}
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {{ client.firstname }} {{ client.lastname }}
                  </th>
                  <td class="px-6 py-4">
                    {{ t('CustomerTable.' + client.gender) }}
                  </td>
                  <td class="px-6 py-4">
                    {{ client.code }}
                  </td>
<!--                  <td class="px-6 py-4">-->
<!--                    {{ client.codetype == 'Passport' ? getDate(client.expire) : '-' }}-->
<!--                  </td>-->
                  <td class="px-6 py-4">
                    {{ getDate(client.birthday) }}
                  </td>
                  <td class="px-6 py-4">
                  {{ client.country.name }}
                </td>
                  <td class="px-6 py-4">
                    {{ getCurrency(client.usertype) }}
                  </td>
                  <!--              <td class="px-6 py-4">-->
                  <!--              {{ t('CustomerTable.' + client.codetype) }}-->
                  <!--            </td>-->
                </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { checkRTL, currency } from '@/utils/func/storeSearch'

const { t } = useI18n()
const store = useStore()
const items = computed(() => store.getters.getPassenger)
const getDate = (e) => {
  return `${ new Date(e).getFullYear() }-${ (new Date(e).getMonth() + 1) < 10 ? '0' + (new Date(e).getMonth() + 1) : (new Date(e).getMonth() + 1) }-${ new Date(e).getDate() < 10 ? '0' + new Date(e).getDate() : new Date(e).getDate() }`
}
const getCurrency = (e) => {
  const money = store.getters.getFlightRivalidatedTicket.flight.price_detail
  switch (e) {
    case 'Adult':
      return currency(money.adult_price,money.currency)
    case 'Child':
      return currency(money.child_price,money.currency)
    case 'Infant':
      return currency(money.infant_price,money.currency)
  }
}
</script>
