// import './assets/main.css'
// import '@fortawesome/fontawesome-free/css/all.css'
// import { MotionPlugin } from '@vueuse/motion'
// import VueWriter from "vue-writer";



// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import { FontAwesomeIcon } from './config/fontawesome'


// const app = createApp(App)

// app.use(router)
// app.use(MotionPlugin)
// app.use(VueWriter)
// app.component('font-awesome-icon', FontAwesomeIcon)

// app.mount('#app')



import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { MotionPlugin } from '@vueuse/motion'
import VueWriter from "vue-writer";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from './config/fontawesome'


// Import AOS styles and script
import 'aos/dist/aos.css'
import AOS from 'aos'

// Create the Vue app
const app = createApp(App)

// Use plugins
app.use(router)
app.use(MotionPlugin)
app.use(VueWriter)
app.component('font-awesome-icon', FontAwesomeIcon)

// Initialize AOS after mounting
AOS.init({
  duration: 1000, // Animation duration in milliseconds
  easing: 'ease-in-out', // Easing function
  once: false, // Ensure animations trigger every time
  offset: 200, // Offset (in pixels) from the original trigger point
  anchorPlacement: 'top-bottom', // Where the animation should trigger
})

// Reinitialize AOS after each route change to re-trigger animations
router.afterEach(() => {
  AOS.refresh()
})

// Mount the app
app.mount('#app')

