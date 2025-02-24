import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/index.scss'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import router from './router'
import Toast  from 'primevue/toast'
import ToastService  from 'primevue/toastservice'

const app = createApp(App)
app.component('Toast',Toast)
app.component('Card',Card)
app.component('InputText',InputText)
app.component('Button',Button)
app.use(router)
app.use(PrimeVue, {
  theme: {
      preset: Aura,
      options: {
          darkModeSelector: false || 'none',
      }
  }
})
app.use(ToastService)
app.mount('#app')
