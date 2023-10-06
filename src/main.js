import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Vue3EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css';
import App from './App.vue'
import router from './router'

const app = createApp(App)
import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

app.use(createPinia())
app.use(router)
app.use(Vue3Toasity)
app.component('EasyDataTable', Vue3EasyDataTable)
app.mount('#app')
