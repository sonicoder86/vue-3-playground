import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import AtSign from './at-sign';
import './custom-element';

const app = createApp(App);
app.config.isCustomElement = tag => /^x-/.test(tag);
app.use(store).use(router);
app.directive('AtSign', AtSign);
app.mount('#app');
