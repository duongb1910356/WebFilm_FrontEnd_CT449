import { createApp } from "vue";

import App from './App.vue';

import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-vue/dist/bootstrap-vue.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import './assets/main.css'
import router from "./router";


// Vue.use(BootstrapVue)
// Vue.use
// createApp.use(BootstrapVue);

createApp(App).use(router).mount('#app')
