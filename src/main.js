import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './index.css'
import router from './router'

axios.defaults.baseURL = 'https://new-kbbi-api.herokuapp.com/'

createApp(App).use(router).use(VueAxios, axios).mount('#app')
