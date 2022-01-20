import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './index.css'

axios.defaults.baseURL = 'https://new-kbbi-api.herokuapp.com/'

createApp(App).use(VueAxios, axios).mount('#app')
