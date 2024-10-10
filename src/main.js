import '../css/main.css'
import VueMatomo from 'vue-matomo'
import '@/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
const head = createHead()

app.use(pinia)
app.use(router)
app.use(head)

if (import.meta.env.MODE === 'production') {
  app.use(VueMatomo, {
    host: 'https://matomo.rocketegg.systems',
    siteId: 1
  })
  window._paq.push(['trackPageView'])
}

app.mount('#app')
