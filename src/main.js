import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueReCaptcha } from 'vue-recaptcha-v3'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueReCaptcha, {
  siteKey: '6LeCpm4rAAAAABdDE_xaGakDWT3nMFdDw_fFpdnm',
  loaderOptions: {
    autoHideBadge: false, // Cambiado a false para ver el badge
    renderParameters: {
      hl: 'es',
      badge: 'bottomright' // Posición del badge
    }
  }
})

app.mount('#app')