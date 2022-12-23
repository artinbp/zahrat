<script setup>
import banner from '../../assets/banner.svg'
import PluxCalender from '@/components/ui/inputs/PluxCalender.vue'
import CitySearch from '@/components/ui/inputs/CitySearch.vue'
import PluxIcon from '@/components/ui/templates/PluxIcons.vue'
import { airplane, hotelIcon, searchIcon } from '@/assets/icons/js/light'
import CardCountainer from '@/components/ui/layout/CardCountainer';
import UseFulCard from '@/components/ui/layout/cards/UseFulCard.vue'
import SiteInformation from '@/components/ui/layout/SiteInformation';
import AddPassengar from '@/components/ui/inputs/addPassengar';
import { ref } from 'vue';
import PluxButton from '@/components/ui/inputs/PluxButton';
import store from '@/store';

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
localStorage.theme = 'light'
const flightType = ref('oneway')
const origins = [
  {
    origin: 'THR',
    date: '2022-05-20',
    travels: [
      {
        destination: 'DXBALL',
        emptyChears: 4,
        price: 4000
      },
      {
        destination: 'BGW',
        emptyChears: 5,
        price: 5000
      },
      {
        destination: 'NJF',
        emptyChears: 20,
        price: 50000
      },
      {
        destination: 'MHD',
        emptyChears: 5,
        price: 5000
      },
      {
        destination: 'AAN',
        emptyChears: 3,
        price: 26000
      }
    ]
  },
  {
    origin: 'DXBALL',
    date: '2022-05-20',
    travels: [
      {
        destination: 'THR',
        emptyChears: 4,
        price: 4000
      },
      {
        destination: 'BGW',
        emptyChears: 5,
        price: 5000
      },
      {
        destination: 'NJF',
        emptyChears: 20,
        price: 50000
      },
      {
        destination: 'MHD',
        emptyChears: 5,
        price: 5000
      },
      {
        destination: 'AAN',
        emptyChears: 3,
        price: 26000
      }
    ]
  },
  {
    origin: 'THR',
    date: '2022-05-20',
    travels: [
      {
        destination: 'DXBALL',
        emptyChears: 4,
        price: 4000
      },
      {
        destination: 'BGW',
        emptyChears: 5,
        price: 5000
      },
      {
        destination: 'NJF',
        emptyChears: 20,
        price: 50000
      },
      {
        destination: 'MHD',
        emptyChears: 5,
        price: 5000
      },
      {
        destination: 'AAN',
        emptyChears: 3,
        price: 26000
      }
    ]
  },
  {
    origin: 'DXBALL',
    date: '2022-05-20',
    travels: [
      {
        destination: 'THR',
        emptyChears: 4,
        price: 4000
      },
      {
        destination: 'BGW',
        emptyChears: 5,
        price: 5000
      },
      {
        destination: 'NJF',
        emptyChears: 20,
        price: 50000
      },
      {
        destination: 'MHD',
        emptyChears: 5,
        price: 5000
      },
      {
        destination: 'AAN',
        emptyChears: 3,
        price: 26000
      }
    ]
  },
  {
    origin: 'BGW',
    date: '2022-05-20',
    travels: [
      {
        destination: 'DXBALL',
        emptyChears: 4,
        price: 4000
      },
      {
        destination: 'THR',
        emptyChears: 5,
        price: 5000
      },
      {
        destination: 'NJF',
        emptyChears: 20,
        price: 50000
      },
      {
        destination: 'MHD',
        emptyChears: 5,
        price: 5000
      },
      {
        destination: 'AAN',
        emptyChears: 3,
        price: 26000
      }
    ]
  },
  {
    origin: 'NJF',
    date: '2022-05-20',
    travels: [
      {
        destination: 'DXBALL',
        emptyChears: 4,
        price: 4000
      },
      {
        destination: 'BGW',
        emptyChears: 5,
        price: 5000
      },
      {
        destination: 'THR',
        emptyChears: 20,
        price: 50000
      },
      {
        destination: 'MHD',
        emptyChears: 5,
        price: 5000
      },
      {
        destination: 'AAN',
        emptyChears: 3,
        price: 26000
      }
    ]
  },
  {
    origin: 'MHD',
    date: '2022-05-20',
    travels: [
      {
        destination: 'DXBALL',
        emptyChears: 4,
        price: 4000
      },
      {
        destination: 'BGW',
        emptyChears: 5,
        price: 5000
      },
      {
        destination: 'NJF',
        emptyChears: 20,
        price: 50000
      },
      {
        destination: 'THR',
        emptyChears: 5,
        price: 5000
      },
      {
        destination: 'AAN',
        emptyChears: 3,
        price: 26000
      }
    ]
  },
  {
    origin: 'AAN',
    date: '2022-05-20',
    travels: [
      {
        destination: 'DXBALL',
        emptyChears: 4,
        price: 4000
      },
      {
        destination: 'BGW',
        emptyChears: 5,
        price: 5000
      },
      {
        destination: 'NJF',
        emptyChears: 20,
        price: 50000
      },
      {
        destination: 'MHD',
        emptyChears: 5,
        price: 5000
      },
      {
        destination: 'THR',
        emptyChears: 3,
        price: 26000
      }
    ]
  }
]
store.dispatch('loginUser')
const search = () => {

  store.dispatch('fetchFlightOneway')
}
</script>
<template>
  <div class="max-w-[1380px] laptop:max-w-[1100px] laptop-mini:max-w-[1000px] min-w-[1380px] laptop:min-w-[900px] laptop-mini:min-w-[750px] m-auto h-[28rem] rtl bg-zahrat rounded-xl flex flex-col px-4 justify-end"
       style="background-repeat: no-repeat; background-origin: content-box;background-clip: border-box;background-size:cover;background-position: center; background-position: center"
       :style="'background-image: url(\''+banner+'\')'">
    <div class="mx-auto max-w-[1360px] laptop:max-w-[1300px] laptop-mini:max-w-[1000px] min-w-[1279px] laptop:min-w-[900px] laptop-mini:min-w-[750px]  my-2 relative top-36">
      <nav class="bg-white w-fit flex bg-zahrat-lightgray text-zahrat-darkgray flex-row gap-[11.6] rounded-t-[16px]">
        <router-link class=" px-4 py-2 rounded-t-[16px] rounded-l-none flex flex-row items-center gap-2 text-zahrat bg-white"
                     to="/flight">
          <PluxIcon class="m-2 fill-zahrat text-lg" size="24" :path="airplane"></PluxIcon>
          رحلة
        </router-link>
        <router-link class=" px-4 py-2 rounded-t-[16px] flex flex-row items-center gap-2" to="/">
          <PluxIcon class="m-2 fill-zahrat-darkgray text-lg" size="24" :path="hotelIcon"></PluxIcon>
          فنادق
        </router-link>
      </nav>
      <div
          class="flex flex-col w-full justify-start pt-12 px-4 pb-8 gap-0 rounded-[16px] rounded-tr-none shadow-lg bg-white">
        <div class="flex flex-row gap-[40px] w-full h-10">
          <div class="flex flex-row gap-2 items-center">
            <input v-model="flightType" type="radio" id="oneway" value="oneway" name="typeTrip"
                   class="checked:accent-zahrat w-[20px] h-[20px]" checked>
            <label for="oneway" class="text-[18px]">ذهاب</label>
          </div>
          <div class="flex flex-row gap-2 items-center">
            <input v-model="flightType" type="radio" id="roundTrip" value="roundTrip" name="typeTrip"
                   class=" checked:accent-zahrat w-[20px] h-[20px]">
            <label for="roundTrip" class="text-[18px]">ذهاب و عودة</label>
          </div>
        </div>
        <div v-if="flightType === 'oneway'" class="flex justify-center gap-[8px] laptop:flex-wrap laptop-mini:flex-wrap items-center mt-5">
          <city-search></city-search>
          <PluxCalender type="oneway" />
          <add-passengar></add-passengar>
          <plux-button class="px-6 laptop:translate-y-0 laptop-mini:translate h-24 w-[220px] laptop:w-[400px] laptop-mini:w-[384px] rounded-2xl bg-zahrat flex flex-col items-center justify-center text-center gap-[10px] cursor-pointer" @action="search">
            <PluxIcon :path="searchIcon" size="30" class="w-8"></PluxIcon>
            <div class="text-sm font-medium text-white text-center" @click="search">یبحث</div>
          </plux-button>
        </div>
        <div v-if="flightType === 'roundTrip'" class="flex justify-center gap-[8px] laptop:flex-wrap laptop-mini:flex-wrap items-center mt-5">
          <city-search></city-search>
          <PluxCalender type="return"/>
          <add-passengar></add-passengar>
          <plux-button class="absolute laptop:static laptop-mini:static -translate-x-[542px] laptop:translate-x-0 laptop-mini:translate-x-0 laptop:translate-y-0 laptop-mini:translate-y-0 translate-y-[110px] h-24 w-[220px] laptop:w-[400px] laptop-mini:w-[384px] rounded-2xl bg-zahrat flex flex-row-reverse items-center justify-center text-center gap-[20px] cursor-pointer" @action="search">
            <PluxIcon :path="searchIcon" size="30" class="w-8"></PluxIcon>
            <div class="text-sm font-medium text-white text-center" @click="search">یبحث</div>
          </plux-button>
        </div>
      </div>
    </div>
  </div>
  <CardCountainer class="mt-64">
    <UseFulCard v-for="(origin, i) in origins" :key="i" :cities="origin"></UseFulCard>
  </CardCountainer>
  <site-information></site-information>
</template>
<style scoped>

</style>
