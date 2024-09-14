import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { MotionPlugin } from '@vueuse/motion'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from './config/fontawesome'


const app = createApp(App)

app.use(router)
app.use(MotionPlugin)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
