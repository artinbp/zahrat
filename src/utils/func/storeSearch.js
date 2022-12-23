import data from '@/utils/datas/data.json'
import router from '@/router';
import {siteData} from '@/config';
import AirePort from '@/utils/datas/airport.json'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
export const AirLineClasses = [
  { title: 'F', value: 'F' },
  { title: 'B', value: 'B' },
  { title: 'E', value: 'E' }
]
export const AirLineTime = [
  { title: 'MORNING', value: 'MORNING' },
  { title: 'AFTERNOON', value: 'AFTERNOON' },
  { title: 'EVENING', value: 'EVENING' }
]
export const checkAirLines = (e) => {
  const search = data.Airline.filter((item) => {
    return item.Code === e
  })
  if (search[0]?.Name) return search[0]?.Name
}
export const checkCity = (e,lang='ar') => {
  const language = ref(useI18n().locale.value)
  const search = AirePort.filter((item) => {
    return item.DepartureCode === e
  })
  if (lang) language.value = lang
  if (search.length > 0) {
    switch (language.value) {
      case 'fa':
        return search[0].DepartureCityFa
      case 'ar':
        return search[0].AirportAR.split('-')[0].split(',')[0]
      case 'en':
        return search[0].DepartureCityEn
    }
  }
}
export const checkAirPort = (e,lang='ar') => {
  const language = ref(useI18n().locale.value)
  const search = AirePort.filter((item) => {
    return item.DepartureCode === e
  })
  if (lang) language.value = lang
  if (search.length > 0) {
    switch (language.value) {
      case 'fa':
        return search[0].AirportFa + '-' + search[0].DepartureCityFa + ',' + search[0].CountryFa
      case 'ar':
        return search[0].AirportAR
      case 'en':
        return search[0].AirportEn + '-' + search[0].DepartureCityEn + ',' + search[0].CountryEn
    }
  }
}
export const checkRTL = () => {
  switch (useI18n().locale.value) {
    case 'fa':
      return true
    case 'ab':
      return true
    case 'en':
      return false
  }
}
export const checkCabinClass = (e) => {
  const { t } = useI18n()
  switch (e) {
    case 'economy':
      return t('AirLineClass.E')
    case 'business':
      return t('AirLineClass.B')
    case 'premium_economy':
      return t('AirLineClass.P')
    case 'first':
      return t('AirLineClass.F')
    default:
      return e
  }
}
export const pValidate = (e) => {
  // const { t } = useI18n()
  const validate = {
    required: false,
    email: false
  }
  if (!e) {
    validate.required = true
  } else {
    const valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
    console.log(valid)
    return valid
  }
}
export const mailValidate = (e) => {
  // const { t } = useI18n()
  if (!e) {
    console.log(e)
  } else {
    const valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
    console.log(valid)
    return valid
  }
}
export const numberValidate = (e) => {
  // const { t } = useI18n()
  if (!e) {
    console.log(e)
  } else {
    const valid = /^\d*$/i.test(e)
    return valid
  }
}
export const passportValidate = (e) => {
  // const { t } = useI18n()
  if (!e) {
    console.log(e)
  } else {
    const valid = /^[A-Z][0-9]{8}$/.test(e)
    console.log(valid)
    return valid
  }
}
export const passwordValidate = (e) => {
  // const { t } = useI18n()
  if (!e) {
    console.log(e)
  } else {
    const valid = /^\d*$/.test(e)
    console.log(valid)
    return valid
  }
}
export const requiredValidate = (e) => {
  // const { t } = useI18n()
  if (!e) {
    return false
  } else {
    return true
  }
}
export const setWeek = (numberOfWeek, type = 'short', lang = 'ar' ) => {
  const { locale } = useI18n()
  let language = locale.value
  if (lang) {
    language = lang
  }
  switch (numberOfWeek) {
    case 0:
      switch (language) {
        case 'ar':
          switch (type) {
            case 'short':
              return 'السبت'
            case 'long':
              return 'السبت'
          }
          break
        case 'en':
          switch (type) {
            case 'short':
              return 'sat'
            case 'long':
              return 'saturday'
          }
          break
        case 'fa':
          switch (type) {
            case 'short':
              return 'ش'
            case 'long':
              return 'شنبه'
          }
          break
      }
      break
    case 1:
      switch (language) {
        case 'ar':
          switch (type) {
            case 'short':
              return 'الأحد'
            case 'long':
              return 'الأحد'
          }
          break
        case 'en':
          switch (type) {
            case 'short':
              return 'sun'
            case 'long':
              return 'sunday'
          }
          break
        case 'fa':
          switch (type) {
            case 'short':
              return 'ی'
            case 'long':
              return 'یکشنبه'
          }
          break
      }
      break
    case 2:
      switch (language) {
        case 'ar':
          switch (type) {
            case 'short':
              return 'الأثنين'
            case 'long':
              return 'الأثنين'
          }
          break
        case 'en':
          switch (type) {
            case 'short':
              return 'mon'
            case 'long':
              return 'monday'
          }
          break
        case 'fa':
          switch (type) {
            case 'short':
              return 'د'
            case 'long':
              return 'دوشنبه'
          }
          break
      }
      break
    case 3:
      switch (language) {
        case 'ar':
          switch (type) {
            case 'short':
              return 'الثلاثاء'
            case 'long':
              return 'الثلاثاء'
          }
          break
        case 'en':
          switch (type) {
            case 'short':
              return 'tues'
            case 'long':
              return 'tuesday'
          }
          break
        case 'fa':
          switch (type) {
            case 'short':
              return ''
            case 'long':
              return ''
          }
          break
      }
      break
    case 4:
      switch (language) {
        case 'ar':
          switch (type) {
            case 'short':
              return 'الأربعاء'
            case 'long':
              return 'الأربعاء'
          }
          break
        case 'en':
          switch (type) {
            case 'short':
              return 'wed'
            case 'long':
              return 'wednesday'
          }
          break
        case 'fa':
          switch (type) {
            case 'short':
              return 'چ'
            case 'long':
              return 'چهارشنبه'
          }
          break
      }
      break
    case 5:
      switch (language) {
        case 'ar':
          switch (type) {
            case 'short':
              return 'الخميس'
            case 'long':
              return 'الخميس'
          }
          break
        case 'en':
          switch (type) {
            case 'short':
              return 'thurs'
            case 'long':
              return 'thursday'
          }
          break
        case 'fa':
          switch (type) {
            case 'short':
              return 'پ'
            case 'long':
              return 'پنجشنبه'
          }
          break
      }
      break
    case 6:
      switch (language) {
        case 'ar':
          switch (type) {
            case 'short':
              return 'الجمعه'
            case 'long':
              return 'الجمعه'
          }
          break
        case 'en':
          switch (type) {
            case 'short':
              return 'fri'
            case 'long':
              return 'friday'
          }
          break
        case 'fa':
          switch (type) {
            case 'short':
              return 'ج'
            case 'long':
              return 'جمعه'
          }
          break
      }
      break
  }
}
export const checkMonth = (numberOfMonth, type = 'real', lang) => {
  const { locale } = useI18n()
  let language = locale.value
  if (lang) {
    language = lang
  }
  switch (numberOfMonth) {
    case 0:

      switch (language) {
        case 'ar':
          switch (type) {
            case 'real':
              return 'کانون الثاني'
            case 'another':
              return 'جانفي'
          }
          break
        case 'en':
          console.log('jan')
          switch (type) {
            case 'another':
              return 'jan'
            case 'real':
              return 'january'
          }
          break
        case 'fa':
          switch (type) {
            case 'real':
              return 'ژان'
            case 'another':
              return 'ژاویه'
          }
          break
      }
      break
    case 1:
      switch (language) {
        case 'ar':
          switch (type) {
            case 'real':
              return 'شباط'
            case 'another':
              return 'فیفري'
          }
          break
        case 'en':
          switch (type) {
            case 'another':
              return 'feb'
            case 'real':
              return 'february'
          }
          break
        case 'fa':
          switch (type) {
            case 'real':
              return 'فبر'
            case 'another':
              return 'فبریه'
          }
          break
      }
      break
    case 2:
      switch (language) {
        case 'ar':
          switch (type) {
            case 'real':
              return 'آذار'
            case 'another':
              return 'مارس'
          }
          break
        case 'en':
          switch (type) {
            case 'another':
              return 'mon'
            case 'real':
              return 'march'
          }
          break
        case 'fa':
          switch (type) {
            case 'real':
              return 'مارس'
            case 'another':
              return 'مارچ'
          }
          break
      }
      break
    case 3:
      switch (language) {
        case 'ar':
          switch (type) {
            case 'real':
              return 'نیسان'
            case 'another':
              return 'آفريل'
          }
          break
        case 'en':
          switch (type) {
            case 'another':
              return 'Apr'
            case 'real':
              return 'April'
          }
          break
        case 'fa':
          switch (type) {
            case 'real':
              return 'آپریل'
            case 'another':
              return 'اپریل'
          }
          break
      }
      break
    case 4:
      switch (language) {
        case 'ar':
          switch (type) {
            case 'real':
              return 'آیار'
            case 'another':
              return 'ماي'
          }
          break
        case 'en':
          switch (type) {
            case 'another':
              return 'May'
            case 'real':
              return 'May'
          }
          break
        case 'fa':
          switch (type) {
            case 'real':
              return 'می'
            case 'another':
              return 'مه'
          }
          break
      }
      break
    case 5:
      switch (language) {
        case 'ar':
          switch (type) {
            case 'real':
              return 'حزيران'
            case 'another':
              return 'جوان'
          }
          break
        case 'en':
          switch (type) {
            case 'another':
              return 'june'
            case 'real':
              return 'june'
          }
          break
        case 'fa':
          switch (type) {
            case 'real':
              return 'ژوئن'
            case 'another':
              return 'جون'
          }
          break
      }
      break
    case 6:
      switch (language) {
        case 'ar':
          switch (type) {
            case 'real':
              return 'تموز'
            case 'another':
              return 'جولیلیة'
          }
          break
        case 'en':
          switch (type) {
            case 'another':
              return 'july'
            case 'real':
              return 'july'
          }
          break
        case 'fa':
          switch (type) {
            case 'real':
              return 'ژولای'
            case 'another':
              return 'جولای'
          }
          break
      }
      break
    case 7:
      switch (language) {
        case 'ar':
          switch (type) {
            case 'real':
              return 'آب'
            case 'another':
              return 'اٌوت'
          }
          break
        case 'en':
          switch (type) {
            case 'another':
              return 'aug'
            case 'real':
              return 'August'
          }
          break
        case 'fa':
          switch (type) {
            case 'real':
              return 'اگوست'
            case 'another':
              return 'اوت'
          }
          break
      }
      break
    case 8:
      switch (language) {
        case 'ar':
          switch (type) {
            case 'real':
              return 'اًيلول'
            case 'another':
              return 'سبتمبر'
          }
          break
        case 'en':
          switch (type) {
            case 'another':
              return 'sep'
            case 'real':
              return 'September'
          }
          break
        case 'fa':
          switch (type) {
            case 'real':
              return 'سپتامبر'
            case 'another':
              return 'ستامبر'
          }
          break
      }
      break
    case 9:
      switch (language) {
        case 'ar':
          switch (type) {
            case 'real':
              return 'تشرین الاًول'
            case 'another':
              return 'اًکتوبر'
          }
          break
        case 'en':
          switch (type) {
            case 'another':
              return 'Oct'
            case 'real':
              return 'October'
          }
          break
        case 'fa':
          switch (type) {
            case 'real':
              return 'اکتبر'
            case 'another':
              return 'اوکتبر'
          }
          break
      }
      break
    case 10:
      switch (language) {
        case 'ar':
          switch (type) {
            case 'real':
              return 'تشرین الثاني'
            case 'another':
              return 'نومفبر'
          }
          break
        case 'en':
          switch (type) {
            case 'another':
              return 'Nov'
            case 'real':
              return 'November'
          }
          break
        case 'fa':
          switch (type) {
            case 'real':
              return 'نوامبر'
            case 'another':
              return 'نوامر'
          }
          break
      }
      break
    case 11:
      switch (language) {
        case 'ar':
          switch (type) {
            case 'real':
              return 'کانون الاًول'
            case 'another':
              return 'دیسمبر'
          }
          break
        case 'en':
          switch (type) {
            case 'another':
              return 'Dec'
            case 'real':
              return 'December'
          }
          break
        case 'fa':
          switch (type) {
            case 'real':
              return 'دسامبر'
            case 'another':
              return 'دسامر'
          }
          break
      }
      break
  }
}
export const solider = (array = []) => {
  if (array) {
    const uniqueObjArray = [...new Map(array.map((item) => [item?.code, item])).values()]
    return uniqueObjArray
  } else {
    return []
  }
}
export const setCustomerFormat = (e) => {
  const array = []
  e.forEach((e) => {
    const expire = new Date(e.expire)
    const birthday = new Date(e.birthday)
    expire.setMinutes(0)
    expire.setHours(0)
    expire.setSeconds(0)
    birthday.setMinutes(0)
    birthday.setHours(0)
    birthday.setSeconds(0)
    array.push({
      date_of_birth: birthday,
      gender: e.gender.toLowerCase(),
      passenger_type: e.usertype.toLowerCase(),
      passenger_name: {
        passenger_first_name: e.firstname,
        passenger_middle_name: '',
        passenger_last_name: e.lastname,
        passenger_title: `${e.usertype.toLowerCase()}_${e.gender.toLowerCase()}`
      },
      passport: {
        country: e.country.code,
        expiry_date: expire,
        issue_date: new Date('2016-05-06T00:00:00Z'),
        passport_number: e.codetype === 'Passport' ? e.code : ''
      },
      national_id: e.codetype === 'National' ? e.code : '',
      nationality: e.country.code,
      extra_service_id: [],
      meal_type_service_id: [],
      frequent_flyer_number: '123456789',
      seat_preference: 'any',
      meal_preference: 'any',
      wheelchair: false,
      destination_address: '99A Lane 04'
    })
  })
  return array
}
export const minToHour = (e) => {
  const { t } = useI18n()
  return (Math.floor(e / 60) > 9 ? Math.floor(e / 60) : '0' + Math.floor(e / 60)) + ' ' + t('CustomerTable.Hour') + ' ' + ((e % 60) > 9 ? (e % 60) : '0' + (e % 60)) + ' ' + t('CustomerTable.Minutes')
}
export const getTime = (e) => {
  const time = new Date(e)
  let hour = time.getUTCHours()
  let min = time.getUTCMinutes()
  hour = hour < 10 ? '0' + hour : hour
  min = min < 10 ? '0' + min : min
  return `${hour}:${min} ${time.getHours() <= 12 ? useI18n().t('AM') : useI18n().t('PM')}`
}
export const currency = (e, currency = 'USD') => {
  switch (currency) {
    case 'USD':
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'}).format(e)
    case 'IRR':
      return new Intl.NumberFormat('en-IR', { style: 'decimal', signDisplay: 'auto', currencyDisplay: 'symbol' }).format(e) + ' ريال'
  }
}
export const expireValidate = (e) => {
  const date = new Date(e)
  const reqiredDate = new Date()
  reqiredDate.setMonth(reqiredDate.getMonth() + 6)
  return (date > reqiredDate)
}
export const setDateCurrect = (e) => {
  const date = new Date(e)
  return `${setWeek(date.getUTCDay())} ${date.getDate()} ${checkMonth(date.getUTCMonth(), 'real', 'ar')} ${date.getUTCFullYear()} ${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`
}
export const differentTime = (departure,arrival) => {
  const departureDate = new Date(departure)
  const arrivalDate = new Date(arrival)
  const time = departureDate - arrivalDate
  return minToHour(((time/1000)/60))
}
export const domesticFlightChecker = (originCode, destinationCode) => {
  const origin = AirePort.filter((item) => {
    return item.DepartureCode === originCode
  })
  const destination = AirePort.filter((item) => {
    return item.DepartureCode === destinationCode
  })
  if (origin[0].CountryEn && destination[0].CountryEn && origin[0].CountryEn === 'Iran' && destination[0].CountryEn === 'Iran') {
    return true
  }
  return false
}
export const device = () => {
  if (window.innerWidth >= 1024) router.push('/')
  if (window.innerWidth <= 768 && window.innerWidth >= 425) router.push(siteData.tabletUrl)
  if (window.innerWidth >= 320 && window.innerWidth <= 425) router.push(siteData.mobileUrl)
}
