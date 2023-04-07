import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'


import "vuetify/dist/vuetify.min.css";

import 'material-design-icons-iconfont/dist/material-design-icons.css';
// import axios from 'axios';

import './assets/main.css'


const app = createApp(App)



app.use(router)
// app.use(axios);
//
app.mount('#app')
app.config.globalProperties.$hostname = "http://127.0.0.1:8000";