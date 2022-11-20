import { createApp } from "vue";

import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-vue/dist/bootstrap-vue.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createPinia } from 'pinia'
import './assets/main.css'
import router from "./router";
import { CAlert } from '@coreui/bootstrap-vue';

createApp(App).use(router).use(createPinia()).use(CAlert).mount('#app')
