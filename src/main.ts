import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './style.css'
import { createMemoryHistory, createRouter } from 'vue-router'
import routes  from './routes/index.ts'
import { createPinia } from 'pinia'

const pinia = createPinia()

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(pinia)

app.mount('#app')
