import '../css/main.css'
import VueMatomo from 'vue-matomo'
import '@/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fr from './locales/fr.json'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
const head = createHead()
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('currentLocale') || 'fr',
  fallbackLocale: 'en',
  messages: {
    en,
    fr
  }
})

app.use(pinia)
app.use(router)
app.use(head)
app.use(i18n)

if (import.meta.env.MODE === 'production') {
  app.use(VueMatomo, {
    host: 'https://matomo.rocketegg.systems',
    siteId: 1
  })
  window._paq.push(['trackPageView'])
}

app.mount('#app')
