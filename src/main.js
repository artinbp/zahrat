import { createApp, defineProps, defineEmits } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/css/index.scss'
import './style.css'
import 'iconv-lite'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ab from './locales/ab.json'
const messages = { en, ab }

const i18n = createI18n({
    locale: 'ab',
    fallbackLocale: ['en'],
    messages
})
createApp(App).use(store).use(i18n).use(defineProps).use(defineEmits).use(router).mount('#app')
