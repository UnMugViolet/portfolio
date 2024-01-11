import '../css/main.css'
import '../src/index.css'
import vClickOutside from 'v-click-outside'

import { createApp } from 'vue' 
import App from './App.vue'
import router from './router'

const app = createApp(App);

app.use(router);
app.use(vClickOutside)

app.mount('#app');
