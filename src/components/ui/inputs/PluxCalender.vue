<script setup>
import { computed, defineProps, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import store from '@/store/'
import { checkMonth, checkRTL } from '@/utils/func/storeSearch'
import { calender, leftArrow } from '@/assets/icons/js/light'
import PluxIcons from '@/components/ui/templates/PluxIcons.vue'
import PluxPopup from '@/components/ui/layout/PluxPopup.vue'

const props = defineProps(['type', 'shows', 'prices', 'design'])
const show = ref(false)
const date = ref({})
const yearToggle = ref(false)
const rangeDate = ref({ min: -1, max: -1 })
const timeSelected = ref(new Date().getTime())
const yearToggleData = ref((new Date().getFullYear()))
const calenderData = ref({})
const calenderSelectedDate = ref({ date: store.getters.getDay || new Date().getDate(),month: store.getters.getMonth || new Date().getMonth(),year: store.getters.getYear || new Date().getFullYear() })
const firstData = ref([])
const secondtData = ref([])
const input = computed(() => {
  if (store.getters.getYear && store.getters.getMonth && store.getters.getDay || store.getters.getMonth === 0){
    return store.getters.getYear + '/' + ((store.getters.getMonth + 1) < 10 ? '0' + (store.getters.getMonth + 1) : (store.getters.getMonth + 1)) + '/' + (store.getters.getDay < 10 ? '0' + store.getters.getDay : store.getters.getDay)
  }
  return new Date().getFullYear() + '/' + ((new Date().getMonth() + 1) < 10 ? '0'+ (new Date().getMonth()+1):(new Date().getMonth()+1)) + '/' + (new Date().getDate() < 10 ? '0' + new Date().getDate(): new Date().getDate())
 })
const inputb = computed(() => {
  if (store.getters.getReturnYear && store.getters.getReturnMonth && store.getters.getReturnDay){
    return store.getters.getReturnYear + '/' + ((store.getters.getReturnMonth + 1) < 10 ? '0' + (store.getters.getReturnMonth + 1) : (store.getters.getReturnMonth + 1)) + '/' + (store.getters.getReturnDay < 10 ? '0' + store.getters.getReturnDay : store.getters.getReturnDay)
  }
  return new Date().getFullYear() + '/' + ((new Date().getMonth() + 1) < 10 ? '0'+ (new Date().getMonth()+1):(new Date().getMonth()+1)) + '/' + (new Date().getDate() < 10 ? '0' + new Date().getDate(): new Date().getDate())
})
const { locale, t } = useI18n()
const getDateInMonth = (y, m) => {
  const dd = new Date(y, m, 1)
  let days = []
  const month = []
  let day = 0
  while (dd.getMonth() === m) {
    day = dd.getDay()
    if (dd.getDay() === 6) {
      if (day !== 0 && dd.getDate() === 1) {
        for (let i = 0; i < day; i++) {
          days.push(null)
        }
      }
      days.push(new Date(dd))
      month.push(days)
      days = []
    } else {
      if (day !== 0 && dd.getDate() === 1) {
        for (let i = 0; i < day; i++) {
          days.push(null)
        }
      }
      days.push(new Date(dd))
    }
    dd.setDate(dd.getDate() + 1)
  }
  month.push(days)
  return month
}
const HideDate = () => {
  show.value = false
}
const give = (t, e) => {
  if (e.year){
    if (e.year !== '' && e.month !== '' && e.date !== '') {
      timeSelected.value = new Date(e.year, e.month, e.date).getTime()
      const dates = {
        gregorian: {
          day: e.date,
          month: e.month,
          year: e.year
        }
      }
      date.value = dates
    }
    if (rangeDate.value.min === -1) {
      rangeDate.value.min = new Date(e.year, e.month, e.date).getTime()
    } else {
      if (rangeDate.value.max === -1) {
        rangeDate.value.max = new Date(e.year, e.month, e.date).getTime()
        if (rangeDate.value.min > rangeDate.value.max) [rangeDate.value.max, rangeDate.value.min] = [rangeDate.value.min, rangeDate.value.max]
      } else {
        rangeDate.value.max = -1
        rangeDate.value.min = new Date(e.year, e.month, e.date).getTime()
      }
    }
    calenderSelectedDate.value = { date: e.date,month: e.month,year: e.year }
    store.commit('setDays')
    doit()
// {year:date.value.gregorian.year,month:date.value.gregorian.month,day:date.value.gregorian.day}
  }
}
const gmd = ref('')
let count = 0
const cm = new Date()
const gd = ref(store.getters.getDay || new Date().getDate())
const gm = ref(store.getters.getMonth || new Date().getMonth())
const gy = ref(store.getters.getYear || new Date().getFullYear())
cm.setDate(gd.value)
cm.setMonth(gm.value)
cm.setFullYear(gy.value)
if (gm.value === 12) {
  gmd.value = cm.getFullYear() + ' - ' + (cm.getFullYear() + 1)
} else {
  gmd.value = '' + cm.getFullYear()
}
const confirm = () => {
if (!date.value.gregorian.year){
  date.value={
    gregorian: {
      day: store.getters.getDay,
      month: store.getters.getMonth,
      year: store.getters.getYear
    }
  }
}
  if (props.type === 'oneway') {
      calenderData.value = {
       year: date.value.gregorian.year,
       month: date.value.gregorian.month,
       day: date.value.gregorian.day
     }
    } else {
    if (props.type === 'return') {
      calenderData.value = {
       min: {
         year: new Date(rangeDate.value.min).getFullYear(),
         month: new Date(rangeDate.value.min).getMonth(),
         day: new Date(rangeDate.value.min).getDate()
       },
       max: {
         year: new Date(rangeDate.value.max).getFullYear(),
         month: new Date(rangeDate.value.max).getMonth(),
         day: new Date(rangeDate.value.max).getDate()
       }
     }
    }
  }
  if (props.type === 'return') {
      if (rangeDate.value.max !== -1) HideDate()
    } else {
      HideDate()
    }
  calenderSelectedDate.value = { date: store.getters.getDay,month: store.getters.getMonth,year: store.getters.getYear }

  store.commit('setDays')
  store.commit('setDate', calenderData.value)
  doit()
  store.commit('setFlightSearchToggle', 'passenger')
 }
const setYear = (e) => {
 gy.value = e
  cm.setFullYear(e)
  yearToggleData.value = e
  doit()
  if (gm.value === 12) {
    gmd.value = cm.getFullYear() + ' - ' + (cm.getFullYear() + 1)
  } else {
    gmd.value = '' + cm.getFullYear()
  }
  yearToggle.value = false
}
function nextMonth () {
  if (count < 12) {
    count = gm.value + 2
    cm.setMonth(count)
    gd.value = cm.getDate()
    gm.value = cm.getMonth()
    gy.value = cm.getFullYear()
    if (gm.value === 12) {
      gmd.value = cm.getFullYear() + ' - ' + (cm.getFullYear() + 1)
    } else {
      gmd.value = '' + cm.getFullYear()
    }
  } else {
    count = 0
  }
  doit()
}
function prevMonth () {
  if (count > 0) {
    count = gm.value - 2
    cm.setMonth(count)
    gd.value = cm.getDate()
    gm.value = cm.getMonth()
    gy.value = cm.getFullYear()
    if (gm.value === 12) {
      gmd.value = cm.getFullYear() + ' - ' + (cm.getFullYear() + 1)
    } else {
      gmd.value = '' + cm.getFullYear()
    }
  } else {
    count = 12
  }
  doit()
}
let firstDay = getDateInMonth(gy.value, gm.value)
let secondDay = getDateInMonth(gy.value, (gm.value + 1) % 12)
firstDay.map((item) => {
  item.map((dayItem) => {
    if (dayItem !== null) {
      let getPrice = ''
      let mony = []
      if (props.prices) {
        mony = props.prices.filter(
            (item) =>
                item.date === new Date(dayItem).getDate() &&
                item.month === new Date(dayItem).getMonth() + 1 &&
                item.year === new Date(dayItem).getFullYear()
        )
        if (mony[0] !== undefined) {
          getPrice = mony[0].price
        } else {
          getPrice = '-'
        }
      } else {
        getPrice = '-'
      }

      const classes =
          ' calendar-day-item ' +
          (new Date(dayItem).getDate() === new Date().getDate() &&
          new Date(dayItem).getMonth() === new Date().getMonth() &&
          new Date(dayItem).getFullYear() === new Date().getFullYear()
              ? 'today-calendar-item'
              : '')
      const selected = new Date(dayItem).getDate() === calenderSelectedDate.value.date && new Date(dayItem).getMonth() === calenderSelectedDate.value.month && new Date(dayItem).getFullYear() === calenderSelectedDate.value.year
      const obj = {
        day: new Date(dayItem).getDay(),
        date: new Date(dayItem).getDate(),
        month: new Date(dayItem).getMonth(),
        year: new Date(dayItem).getFullYear(),
        price: getPrice,
        selected: selected,
        class: classes
      }
      firstData.value.push(obj)
    } else {
      const obj = {
        day: '',
        date: '',
        month: '',
        year: '',
        price: '',
        selected: false,
        class:  'calendar-day-item '
      }
      firstData.value.push(obj)
    }
    return ''
  })
  return ''
})
secondDay.map((item) => {
  item.map((dayItem) => {
    if (dayItem !== null) {
      let getPrice = ''
      let mony = []
      if (props.prices) {
        mony = props.prices.filter(
            (item) =>
                item.day === new Date(dayItem).getDate() &&
                item.month === new Date(dayItem).getMonth() + 1 &&
                item.year === new Date(dayItem).getFullYear()
        )
        if (mony[0] !== undefined) {
          getPrice = mony[0].price
        } else {
          getPrice = '-'
        }
      } else {
        getPrice = '-'
      }
      const selected = new Date(dayItem).getDate() === calenderSelectedDate.value.date && new Date(dayItem).getMonth() === calenderSelectedDate.value.month && new Date(dayItem).getFullYear() === calenderSelectedDate.value.year
      const classes =
          ' calendar-day-item ' +
          (new Date(dayItem).getDate() === new Date().getDate() &&
          new Date(dayItem).getMonth() === new Date().getMonth() &&
          new Date(dayItem).getFullYear() === new Date().getFullYear()
              ? 'today-calendar-item'
              : '')
      const obj = {
        day: new Date(dayItem).getDay(),
        date: new Date(dayItem).getDate(),
        month: new Date(dayItem).getMonth(),
        year: new Date(dayItem).getFullYear(),
        price: getPrice,
        selected: selected,
        class: classes
      }
      secondtData.value.push(obj)
    } else {
      const obj = {
        day: '',
        date: '',
        month: '',
        year: '',
        price: '',
        selected: false,
        class: ' calendar-day-item '
      }
      secondtData.value.push(obj)
    }
    return ''
  })
  return ''
})
const doit = () => {
  firstDay = getDateInMonth(gy.value, gm.value)
  secondDay = getDateInMonth(gy.value, (gm.value + 1) % 12)
  firstData.value = []
  secondtData.value = []
  firstDay.map((item) => {
    item.map((dayItem) => {
      if (dayItem !== null) {
        let getPrice = ''
        let mony = []
        if (props.prices) {
          mony = props.prices.filter(
              (item) =>
                  item.date === new Date(dayItem).getDate() &&
                  item.month === new Date(dayItem).getMonth() + 1 &&
                  item.year === new Date(dayItem).getFullYear()
          )
          if (mony[0] !== undefined) {
            getPrice = mony[0].price
          } else {
            getPrice = '-'
          }
        } else {
          getPrice = '-'
        }
        const selected = (props.type === 'oneway') ? new Date(dayItem).getDate() === calenderSelectedDate.value.date && new Date(dayItem).getMonth() === calenderSelectedDate.value.month && new Date(dayItem).getFullYear() === calenderSelectedDate.value.year : (rangeDate.value.max === new Date(dayItem).getTime() || rangeDate.value.min === new Date(dayItem).getTime())
        const semiday = (rangeDate.value.max > new Date(dayItem).getTime() && rangeDate.value.min < new Date(dayItem).getTime() && props.type === 'return') ? ' bg-red-300 ' : ' '

        const classes =semiday+
            ' calendar-day-item '
             +
            (new Date(dayItem).getDate() === new Date().getDate() &&
            new Date(dayItem).getMonth() === new Date().getMonth() &&
            new Date(dayItem).getFullYear() === new Date().getFullYear()
                ? 'today-calendar-item'
                : '')
        const obj = {
          day: new Date(dayItem).getDay(),
          date: new Date(dayItem).getDate(),
          month: new Date(dayItem).getMonth(),
          year: new Date(dayItem).getFullYear(),
          price: getPrice,
          selected: selected,
          class: classes
        }
        firstData.value.push(obj)
      } else {
        const obj = {
          day: '',
          date: '',
          month: '',
          year: '',
          price: '',
          selected: false,
          class: ' calendar-day-item '
        }
        firstData.value.push(obj)
      }
      return ''
    })
    return ''
  })
  secondDay.map((item) => {
    item.map((dayItem) => {
      if (dayItem !== null) {
        let getPrice = ''
        let mony = []
        if (props.prices) {
          mony = props.prices.filter(
              (item) =>
                  item.day === new Date(dayItem).getDate() &&
                  item.month === new Date(dayItem).getMonth() + 1 &&
                  item.year === new Date(dayItem).getFullYear()
          )
          if (mony[0] !== undefined) {
            getPrice = mony[0].price
          } else {
            getPrice = '-'
          }
        } else {
          getPrice = '-'
        }
        const selected = (props.type === 'oneway') ? new Date(dayItem).getDate() === new Date(timeSelected.value).getDate() && new Date(dayItem).getMonth() ===  new Date(timeSelected.value).getMonth() && new Date(dayItem).getFullYear() === new Date(timeSelected.value).getFullYear(): (rangeDate.value.max === new Date(dayItem).getTime() || rangeDate.value.min === new Date(dayItem).getTime())
        const semiday = (rangeDate.value.max > new Date(dayItem).getTime() && rangeDate.value.min < new Date(dayItem).getTime() && props.type === 'return') ? ' bg-red-300 text-white' : ' '
        const classes =semiday+
            ' calendar-day-item '
             +
            (new Date(dayItem).getDate() === new Date().getDate() &&
            new Date(dayItem).getMonth() === new Date().getMonth() &&
            new Date(dayItem).getFullYear() === new Date().getFullYear()
                ? 'today-calendar-item'
                : '')
        const obj = {
          day: new Date(dayItem).getDay(),
          date: new Date(dayItem).getDate(),
          month: new Date(dayItem).getMonth(),
          year: new Date(dayItem).getFullYear(),
          price: getPrice,
          selected: selected,
          class: classes
        }
        secondtData.value.push(obj)
      } else {
        const obj = {
          day: '',
          date: '',
          month: '',
          year: '',
          price: '',
          selected: false,
          class: ' calendar-day-item '
        }
        secondtData.value.push(obj)
      }
      return ''
    })
    return ''
  })
  store.commit("setDays")
}
const todaytodo = () => {
  cm.setDate(new Date().getDate())
  cm.setMonth(new Date().getMonth())
  cm.setFullYear(new Date().getFullYear())
  gd.value = cm.getDate()
  gm.value = cm.getMonth()
  gy.value = cm.getFullYear()
  if (gm.value === 12) {
    gmd.value = cm.getFullYear() + ' - ' + (cm.getFullYear() + 1)
  } else {
    gmd.value = '' + cm.getFullYear()
  }
  calenderSelectedDate.value = { date: store.getters.getDay,month: store.getters.getDay,year: store.getters.getDay }
  doit()
}
const leftbtn = () => {
  if (locale.value === 'ar' || locale.value === 'fa') {
    prevMonth()
  } else {
    nextMonth()
  }
}
const rightbtn = () => {
  if (locale.value === 'ar' || locale.value === 'fa') {
    nextMonth()
  } else {
    prevMonth()
  }
}
const closer = () => {
  show.value = false
  store.commit('setFlightSearchToggle', 'city')
  doit()
}
const secondAction = () => {
  if(props.type === 'return') show.value = true
}
const searchToggle = computed(() => store.getters.getFlightSearchToggle )
onMounted(() => {
  date.value={
    gregorian: {
      day: store.state.day,
      month: store.state.month,
      year: store.state.year
    }
  }
})
</script>
<template>
  <div v-if="!design" class="h-24 flex flex-row gap-[5px]">
    <div
        @click="show = !show"
        class="h-24 w-[236px] laptop:w-[200px] laptop-mini:w-[190px] border-box pl-3 float-left bg-[#F3F3F3] rounded-r-2xl cursor-pointer">
      <div class="h-10 w-10 mt-7 mx-[14px] float-right">
        <button class="w-10 h-10 flex border rounded-full justify-center items-center" :class="store.getters.getDay? 'cursor-pointer border-zahrat-lightgray rounded-full  bg-zahrat' : 'cursor-pointer border-zahrat-lightgray rounded-full  bg-white' ">
          <PluxIcons :path="calender" size="20" view-box="0 0 24 24" class="w-6 flex justify-center items-center h-6" :class="store.getters.getDay? ' stroke-zahrat-bone shadow-zahrat shadow-lg fill-zahrat ' : 'stroke-zahrat-darkgray  fill-white '  "></PluxIcons>
        </button>
      </div>
      <div class="mt-5 mr-4 text-right">
        <div class="text-sm text-zahrat-gray font-normal text-right"> {{ t('DepartDate') }} </div>
        <h1 class="text-xl mt-2 font-bold focus:outline-0 text-right" >{{ input }}</h1>
      </div>
    </div>
    <div
        @click="secondAction"
        class="h-24 w-[236px] laptop:w-[200px] laptop-mini:w-[190px] border-box pl-3 float-left rounded-l-2xl" :class="[type === 'return' ? 'cursor-pointer  bg-[#F3F3F3]' : 'bg-[#E9E9E9]  cursor-default']">
      <div class="w-10 h-10 mt-7 mx-[14px] float-right">
        <button class="w-10 h-10 flex border justify-center items-center" :class="[type === 'return' ? store.getters.getReturnDay? 'cursor-pointer border-zahrat-lightgray rounded-full  bg-zahrat' : 'cursor-pointer border-zahrat-lightgray rounded-full  bg-white' : 'border-zahrat-gray rounded-full cursor-default']">
          <PluxIcons :path="calender" size="20" view-box="0 0 24 24" class="w-6 flex justify-center items-center h-6" :class="[type === 'return' ? store.getters.getReturnDay? ' stroke-zahrat-bone shadow-zahrat shadow-lg fill-zahrat ' : 'stroke-zahrat-darkgray  fill-white '  : 'stroke-zahrat-gray']"></PluxIcons>
        </button>
      </div>
      <div class="mt-5 mr-4 text-right">
        <div class="text-sm font-normal text-fadeFont"  :class="[type === 'return' ? 'cursor-pointer text-zahrat-gray' : 'text-[#cacaca]  cursor-default']" > {{ t('ReturnDate') }}</div>
        <h1 class="text-xl mt-2 font-bold focus:outline-0 text-blackFont" >{{type === 'return' ?  inputb : '' }} <span v-if="type === 'oneway'" class="text-[#acacac] font-semibold text-lg">تاریخ عودة</span></h1>
      </div>
    </div>
  </div>
  <div v-if="design === 'searchPage'" class="h-24 grid mt-3 grow grid-cols-2 gap-2">
    <div
        @click="show = !show"
        class="h-24 w-full border-box pl-3 float-right bg-[#fff] rounded-r-2xl cursor-pointer">
      <div class="mt-5 mr-4 text-right">
        <div class="text-sm font-normal  text-right"> {{ t('DepartDate') }} </div>
        <h1 class="text-xl mt-2 font-bold focus:outline-0  text-right" >{{ input }}</h1>
      </div>
    </div>
    <div
        @click="secondAction"
        class="h-24 border-box pl-3 r rounded-l-2xl" :class="[type === 'return' ? 'cursor-pointer  bg-[#fff]' : 'bg-[#E9E9E9]  cursor-default']">

      <div class="mt-5 mr-4 text-right">
        <div class="text-sm font-normal text-fadeFont"  :class="[type === 'return' ? 'cursor-pointer' : 'text-[#cacaca]  cursor-default']" > {{ t('ReturnDate') }}</div>
        <h1 class="text-xl mt-2 font-bold focus:outline-0 text-blackFont" >{{type === 'return' ?  inputb : '' }} <span v-if="type === 'oneway'" class="text-[#acacac] font-semibold text-lg">تاریخ عودة</span></h1>
      </div>
    </div>
  </div>
  <plux-popup :popup="show || searchToggle === 'calender'" class="flex flex-row justify-center" :close="closer">
    <div
        class="calendar-contaienr"
        :class="[show || searchToggle === 'calender' ? 'active' : '', checkRTL() ? 'rtl' : 'ltr' ]"
    >
      <div class="calendar-header">
         <div class="wrapper">
          <button @click="todaytodo">
            <span>{{ t('today') }}</span>
          </button>
          <button @click="yearToggle = !yearToggle">
           {{ gmd }}
          </button>
           <ul v-if="yearToggle" class="absolute bg-zahrat-bone shadow shadow-zahrat-gray rounded-sm w-24 translate-x-4 z-30 translate-y-10 left-0">
             <li v-for="(a, i) in 3" @click="setYear((new Date().getFullYear() + i))" :key="a" class="hover:bg-zahrat-lightgray p-2 p-2 cursor-pointer">{{ new Date((new Date().getFullYear() + i),new Date().getMonth(),new Date().getDate()).getFullYear() }}</li>
           </ul>
        </div>
      </div>
      <div class="calendar-body">
        <div class="calendar-item">
          <div class="calendar-month justify-end">
            <div
                class="next-button active:scale-95 cursor-pointer"
                :class="checkRTL()?'rotate-0  ':'rotate-180 '"
                @click="leftbtn"
            >
              <PluxIcons :path="leftArrow" class="rotate-180 fill-zahrat-darkgray text-2xl" view-box="0 0 24 24" size="30"></PluxIcons>
            </div>
            <span class="title" :class="checkRTL()?'rounded-tr-lg ':'rounded-tl-lg'">
            <p class="text-lg font-semibold">{{ (gm + 1) % 12 === 0 ? (gy + 1) : gy }}</p>
              <p class="text-lg font-semibold">{{
                checkMonth((gm + 1) % 12, 'real', 'ar')
              }}</p>
            <p class="text-xs">{{ checkMonth((gm + 1) % 12, 'real', 'en') }}</p>
          </span>
          </div>
          <div class="calendar-weekend">
            <div class="calendar-weekend-item">
              Sat
            </div>
            <div class="calendar-weekend-item">
              Fri
            </div>
            <div class="calendar-weekend-item">
              Thur
            </div>
            <div class="calendar-weekend-item">
              Wed
            </div>
            <div class="calendar-weekend-item">
              Tue
            </div>
            <div class="calendar-weekend-item">
              Mon
            </div>
            <div class="calendar-weekend-item">
              Sun
            </div>
          </div>
          <div class="calendar-day">
            <div
                v-for="(dayItem, i) in secondtData"
                :key="i"
                :class="`${dayItem.class} ${dayItem.selected?'activate':''}`"
                @click="give('G', dayItem)"
            >
            <span :class="{ holidays: dayItem.day === 0 }">{{
                dayItem.date
              }}</span>
              <span>{{ dayItem.price }}</span>
            </div>
          </div>
        </div>
        <div class="calendar-item">
          <div class="calendar-month justify-start">
          <span class="title" :class="checkRTL()?'rounded-tl-lg':'rounded-tr-lg '">
            <p class="text-lg font-semibold">{{ gmd }}</p>
            <p class="text-lg font-semibold">{{ checkMonth(gm, 'real', 'ar') }}</p>
            <p class="text-xs">{{ checkMonth(gm, 'real', 'en') }}</p>
          </span>
            <div
                class="prev-button active:scale-95 cursor-pointer"
                :class="checkRTL()?'rotate-0':'rotate-180'"
                @click="rightbtn"
            >
              <PluxIcons :path="leftArrow" class="rotate-0 fill-zahrat-darkgray text-xl" view-box="0 0 24 24" size="30"></PluxIcons>
            </div>
          </div>
          <div class="calendar-weekend">
            <div class="calendar-weekend-item">
              Sat
            </div>
            <div class="calendar-weekend-item">
              Fri
            </div>
            <div class="calendar-weekend-item">
              Thur
            </div>
            <div class="calendar-weekend-item">
              Wed
            </div>
            <div class="calendar-weekend-item">
              Tue
            </div>
            <div class="calendar-weekend-item">
              Mon
            </div>
            <div class="calendar-weekend-item">
              Sun
            </div>
          </div>
          <div class="calendar-day">
            <div
                v-for="(dayItem, i) in firstData"
                :key="i"
                :class="`${dayItem.class} ${dayItem.selected?'activate':''}`"
                @click="give('G', dayItem)"
            >
            <span :class="{ holidays: dayItem.day === 0 }">{{
                dayItem.date
              }}</span>
              <span>{{ dayItem.price }}</span>
            </div>
          </div>
        </div>
        <div class="actions w-full col-span-2 flex gap-2 flex-row justify-center items-center p-2">
          <button @click="closer" class="bg-zahrat-rose p-1.5 text-zahrat rounded-md px-4">
            القاء
          </button>
          <button @click="confirm" class="bg-zahrat p-1.5 text-zahrat-bone rounded-md px-4">
            حسنا
          </button>
        </div>
      </div>
    </div>
  </plux-popup>
</template>
<style lang="scss" scoped>
.calendar-contaienr {
  user-select: none;
  @apply absolute scroll-auto w-[880px] laptop:w-[740px] laptop-mini:w-[640px] laptop:scale-50 laptop-mini:scale-50 z-50 left-auto mt-[64px] tablet-mini:mt-24 duration-200 justify-center translate-y-2 content-center opacity-0;
  visibility: hidden;

  &.active {
    @apply transform-none opacity-100;
    visibility: visible;
  }
  &.ltr {
    @apply right-0;
  }
  .calendar-header {
    @apply flex justify-between items-center bg-white px-[32px] pt-[32px] rounded-t-md;
    .wrapper {
      @apply w-full flex flex-row justify-between overflow-visible gap-3;
      button {
        @apply transform active:scale-90 px-4 py-1 h-1/2 duration-100;
      }
      button:nth-child(1) {
        @apply text-zahrat text-lg bg-zahrat-bone border-zahrat border rounded-md shadow inline-flex justify-between items-center gap-3 text-center;
      }
      button:nth-child(2) {
        @apply w-24 text-center text-zahrat-slate text-lg bg-zahrat-bone border-zahrat-gray border rounded-md shadow inline-flex justify-center items-center gap-3 text-center;
      }
    }
  }
  .calendar-body {
    @apply grid grid-cols-2 gap-5 bg-white shadow-xl rounded-b-md p-2;
    @apply relative;
    svg {
      @apply w-2;
    }

    .calendar-month {
      @apply flex flex-row;
      .next-button {
        @apply flex rounded-full text-red-700 justify-center items-center w-10 h-10 border-2 border-zahrat-slate m-1;
      }

      .prev-button {
        @apply flex rounded-full text-red-700 justify-center items-center w-10 h-10 border-2 border-zahrat-slate m-1;
      }

      .title {
        @apply flex w-5/6 justify-center items-end gap-2 bg-white text-zahrat-darkgray py-1;
      }
    }

    .calendar-weekend {
      @apply grid grid-cols-7 text-zahrat-gray rounded-b-md;
      .calendar-weekend-item {
        user-select: none;
        @apply p-2 justify-center items-center text-center duration-150 rounded-2xl active:scale-90 transform cursor-pointer;
      }
    }

    .calendar-day {
      direction: ltr;
    }

    .calendar-day-m {
      direction: rtl;
    }

    .calendar-day {
      @apply grid grid-cols-7 gap-1 px-4;
      .calendar-day-item {
        user-select: none;
        @apply font-semibold justify-center text-slate-800 items-center text-center duration-150 rounded-b-md active:scale-95 transform cursor-pointer;
        @apply flex flex-col rounded-md bg-zahrat-bone w-[48px] laptop:w-[40px] laptop-mini:w-[34px] h-[56px] laptop:h-[40px] laptop-mini:h-[34px] laptop:p-[3px] laptop-mini:p-[3px] laptop:text-[12px] laptop-mini:text-[9px] ;
        span:nth-child(2) {
          @apply text-xs text-red-600;
        }
        .holidays {
          color: #ff253a;
        }

        &.activate {
          background: #fd2a3d !important;
          color: white;

          span:nth-child(2) {
            @apply text-xs text-red-50;
          }
          .holidays {
            color: #ffc21a;
          }
        }

        &:hover {
          @apply bg-[#af1222] text-white;
          span:nth-child(2) {
            @apply text-xs text-red-50;
          }

          .holidays {
            color: #ffc21a;
            text-shadow: 0 0 12px #eeeeee;
          }
        }

        &.today-calendar-item {
          @apply rounded-md;
          background: #af122255;
          color: #666 !important;
          &.activate{
            color: #fff !important;
          }
          &:hover {
            @apply bg-[#ef1222] text-blue-50 ;
            span:nth-child(2) {
              @apply text-xs text-red-50 ;
            }

            .holidays {
              color: #ffa21a;
              text-shadow: 0 0 12px #eeeeee;
            }
          }

          .holidays {
            color: #ffa21a;
            text-shadow: 0 0 12px #eeeeee;
          }
        }
      }
    }

  }
}
.calendar {
  @apply relative;
  .field {
    @apply flex justify-between items-center relative text-slate-500 border-[#111827] py-3 px-6 rounded-lg bg-white tablet-large:w-64 laptop-mini:w-64 w-full tablet-large:border laptop-mini:border text-right mt-1 tablet-large:mt-0 laptop-mini:mt-0;
    // xl
    @apply laptop-mini:text-base;
    // lg
    @apply tablet-large:text-xs;
    // 2xl
    @apply 4k:text-base;
    border: #111827aa !important;

    svg {
      @apply absolute left-3 w-6 h-6 duration-150;
      &.arrowActive {
        @apply transform rotate-180;
      }
    }

    svg:nth-child(2) {
      @apply absolute right-3 w-6 h-6 duration-150;
    }
  }

  .date-picker {
    @apply text-slate-500  p-2 duration-200 opacity-0 translate-y-2 rounded-md shadow-md absolute w-[800px] left-0 mt-4 border bg-white z-20;
    visibility: hidden;

    .wrapper {
      @apply grid grid-cols-2 gap-2;
    }

    &.ltr {
      @apply right-0;
    }

    &.active {
      visibility: visible;
      @apply transform-none opacity-100;
    }

    .weekend {
      @apply grid grid-cols-7 items-center bg-red-50 my-2 rounded-md text-red-500 shadow shadow-slate-300/30;
      span {
        @apply p-3 text-center flex justify-center items-center;
      }
    }

    .body {
      @apply grid grid-cols-7 items-center gap-1;
      span {
        @apply p-3 hover:bg-teal-100 rounded-md hover:text-teal-500 duration-100 cursor-pointer ring-emerald-50 text-center flex justify-center items-center border border-slate-100 shadow shadow-slate-300/30;
      }
    }
  }
}
</style>
