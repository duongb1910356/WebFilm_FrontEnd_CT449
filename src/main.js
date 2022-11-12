import { createApp } from "vue";

import App from './App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-vue/dist/bootstrap-vue.css';

import "@fortawesome/fontawesome-free/css/all.min.css";
import { createPinia } from 'pinia'
import './assets/main.css'
import router from "./router";

import { CardPlugin } from 'bootstrap-vue'
// Vue.use(BootstrapVue)
// Vue.use
// createApp.use(BootstrapVue);

createApp(App).use(router).use(createPinia()).use(CardPlugin).mount('#app')
