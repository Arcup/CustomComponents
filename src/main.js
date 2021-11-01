import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/_global.css'
import '@fortawesome/fontawesome-free/js/all'
import 'prismjs'
import 'prismjs/themes/prism.css'

const app = createApp(App)
app.use(router)

app.mount('#app')
