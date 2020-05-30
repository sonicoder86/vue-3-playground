import { createRouter, createWebHashHistory } from 'vue-router';
import Cart from './components/Cart.vue';
import Checkout from './components/Checkout.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'cart', component: Cart },
    { path: '/checkout', name: 'checkout', component: Checkout },
  ],
});
