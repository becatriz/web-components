import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

import { ComponentLibrary } from 'vue-library-reb';

createApp(App).use(ComponentLibrary).mount('#app');
