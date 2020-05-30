# Vue 3 Playground

[![Build Status](https://travis-ci.com/blacksonic/vue-3-playground.svg?branch=master)](https://travis-ci.com/blacksonic/vue-3-playground)
[![Dependencies Status](https://david-dm.org/blacksonic/vue-3-playground/status.svg)](https://david-dm.org/blacksonic/vue-3-playground)

Vue 3 Playground stands as a learning project for those who want to get familiar with [the new features of Vue 3](https://composition-api.vuejs.org/).

The project aims to include all the new features. If you find something missing please create an issue/PR.

The application is a shopping cart where you can alter the name, price and quantity of the products and
recalculates the total price based on the items and used coupon.

![Vue 3 Playground](./images/screenshot.png "Vue 3 Playground")

The playground is available also [in online version](https://codesandbox.io/s/github/blacksonic/vue-3-playground).

### New APIs covered

- [createApp](https://github.com/blacksonic/vue-3-playground/blob/master/src/main.js)
- [use](https://github.com/blacksonic/vue-3-playground/blob/master/src/main.js)
- [ref](https://github.com/blacksonic/vue-3-playground/blob/master/src/hooks.js)
- [reactive](https://github.com/blacksonic/vue-3-playground/blob/master/src/hooks.js)
- [computed](https://github.com/blacksonic/vue-3-playground/blob/master/src/hooks.js)
- [toRefs](https://github.com/blacksonic/vue-3-playground/blob/master/src/components/Cart.vue)
- [watchEffect](https://github.com/blacksonic/vue-3-playground/blob/master/src/components/Cart.vue)
- [watch](https://github.com/blacksonic/vue-3-playground/blob/master/src/components/Cart.vue)
- [onMount](https://github.com/blacksonic/vue-3-playground/blob/master/src/components/Cart.vue)
- [onUnmount](https://github.com/blacksonic/vue-3-playground/blob/master/src/components/Cart.vue)
- [onUpdate](https://github.com/blacksonic/vue-3-playground/blob/master/src/components/Cart.vue)
- [onErrorCaptured](https://github.com/blacksonic/vue-3-playground/blob/master/src/components/Cart.vue)
- [useStore](https://github.com/blacksonic/vue-3-playground/blob/master/src/App.vue)
- [useRoute](https://github.com/blacksonic/vue-3-playground/blob/master/src/components/Checkout.vue)
- [emit](https://github.com/blacksonic/vue-3-playground/blob/master/src/components/Coupon.vue)
- [provide](https://github.com/blacksonic/vue-3-playground/blob/master/src/version.js)
- [inject](https://github.com/blacksonic/vue-3-playground/blob/master/src/version.js)
- [createStore](https://github.com/blacksonic/vue-3-playground/blob/master/src/store.js)
- [createRouter](https://github.com/blacksonic/vue-3-playground/blob/master/src/router.js)
- [defineComponent](https://github.com/blacksonic/vue-3-playground/blob/master/src/components/Payment.jsx)
- [defineAsyncComponent](https://github.com/blacksonic/vue-3-playground/blob/master/src/components/AsyncPayment.js)
- [h](https://github.com/blacksonic/vue-3-playground/blob/master/src/components/Spinner.js)
- [JSX](https://github.com/blacksonic/vue-3-playground/blob/master/src/components/Payment.jsx)
- [Suspense](https://github.com/blacksonic/vue-3-playground/blob/master/src/components/Cart.vue)
- [Async Component](https://github.com/blacksonic/vue-3-playground/blob/master/src/components/Exchange.vue)
- [Teleport/Portal](https://github.com/blacksonic/vue-3-playground/blob/master/src/components/Header.vue)
- [Fragments/MultiRoot](https://github.com/blacksonic/vue-3-playground/blob/master/src/App.vue)
- [Multiple v-models](https://github.com/blacksonic/vue-3-playground/blob/master/src/components/Cart.vue)
- [Scoped slot](https://github.com/blacksonic/vue-3-playground/blob/master/src/components/Cart.vue)

### Contributing

This project is under development. If you have any idea how to include more and more new features of Vue 3 in this application feel free to share your ideas in an issue/PR.

