import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import AtSign from './at-sign';

createApp(App).use(store).use(router).directive('AtSign', AtSign).mount('#app');
