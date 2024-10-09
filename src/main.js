import '../css/main.css'
import VueMatomo from 'vue-matomo'
import '@/index.css'

import { createApp } from 'vue' 
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

if (import.meta.env.MODE === 'production') {
  app.use(VueMatomo, {
    host: 'https://matomo.rocketegg.systems',
    siteId: 1,
  });
}

app.mount('#app');

window._paq.push(['trackPageView'])