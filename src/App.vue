<script>
import { toRefs, onMounted, onUpdated, onUnmounted, watchEffect, watch } from 'vue';
import { provideVersion } from './version';
import Header from './Header.vue';
import Coupon from './Coupon.vue';
import { useCart } from './hooks';

export default {
  name: 'App',
  components: { Header, Coupon },
  setup() {
    console.log('setup');

    const { product, secondName, secondPrice, secondQuantity, total, coupon, setCoupon } = useCart();
    provideVersion();

    watchEffect(() => console.log(`watchEffect: ${product.firstName} ${product.firstPrice}x${product.firstQuantity}`));
    watch([secondName], () => console.log(`watch: ${secondName.value} ${secondPrice.value}x${secondQuantity.value}`));

    onMounted(() => console.log('mounted'));
    onUpdated(() => console.log('updated'));
    onUnmounted(() => console.log('onunmounted'));

    return { ...toRefs(product), secondName, secondPrice, secondQuantity, total, coupon, setCoupon };
  }
};
</script>

<template>
  <div class="container">
    <Header />

    <div class="row">

      <div class="col-md-4 order-md-2 mb-4">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-muted">Cart</span>
        </h4>
        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 class="my-0">{{ firstName }}</h6>
            </div>
            <span class="text-muted">${{ firstPrice * firstQuantity }}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 class="my-0">{{ secondName }}</h6>
            </div>
            <span class="text-muted">${{ secondPrice * secondQuantity }}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>${{ total }}</strong>
          </li>
        </ul>

        <Coupon :percent="10" @select="setCoupon" />
      </div>

      <div class="col-md-8 order-md-1">
        <h4 class="mb-3">Items</h4>
        <form class="needs-validation">

          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="first-item-name">Name</label>
              <input v-model="firstName" type="text" class="form-control" id="first-item-name">
            </div>
            <div class="col-md-3 mb-3">
              <label for="first-item-price">Price</label>
              <input v-model="firstPrice" type="number" class="form-control" id="first-item-price">
            </div>
            <div class="col-md-3 mb-3">
              <label for="first-item-quantity">Quantity</label>
              <input v-model="firstQuantity" type="number" class="form-control" id="first-item-quantity">
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="second-item-name">Name</label>
              <input v-model="secondName" type="text" class="form-control" id="second-item-name">
            </div>
            <div class="col-md-3 mb-3">
              <label for="second-item-price">Price</label>
              <input v-model="secondPrice" type="number" class="form-control" id="second-item-price">
            </div>
            <div class="col-md-3 mb-3">
              <label for="second-item-quantity">Quantity</label>
              <input v-model="secondQuantity" type="number" class="form-control" id="second-item-quantity">
            </div>
          </div>
        </form>
      </div>

    </div>

    <footer class="my-5 pt-5 text-muted text-center text-small">
      <p class="mb-1">&copy; 2020 blacksonic</p>
    </footer>
  </div>
</template>
