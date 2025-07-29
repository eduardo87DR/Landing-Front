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
  siteKey: window.env.RECAPTCHA_SITE_KEY,
  loaderOptions: {
    autoHideBadge: false,
    renderParameters: {
      hl: 'es',
      badge: 'bottomright'
    }
  }
})

app.mount('#app')