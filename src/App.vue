<script>
import { toRefs, onMounted, onUpdated, onUnmounted, onErrorCaptured, watchEffect, watch, ref } from 'vue';
import { provideVersion } from './version';
import Header from './Header.vue';
import Coupon from './Coupon.vue';
import Item from './Item.vue';
import { useCart } from './hooks';

export default {
  name: 'App',
  components: { Header, Coupon, Item },
  setup() {
    console.log('setup');

    const { product, secondName, secondPrice, secondQuantity, total, coupon, setCoupon } = useCart();
    provideVersion();

    watchEffect(() => console.log(`watchEffect: ${product.firstName} ${product.firstPrice}x${product.firstQuantity}`));
    watch([secondName], () => console.log(`watch: ${secondName.value} ${secondPrice.value}x${secondQuantity.value}`));

    onMounted(() => console.log('mounted'));
    onUpdated(() => console.log('updated'));
    onUnmounted(() => console.log('onunmounted'));

    const error = ref(null);
    onErrorCaptured(e => {
      error.value = e;
      return true;
    });

    return { ...toRefs(product), secondName, secondPrice, secondQuantity, total, coupon, setCoupon, error };
  }
};
</script>

<template>
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

    <div v-if="error">
      {{ error }}
    </div>
    <Suspense v-else>
      <template #default>
        <Coupon :percent="10" @select="setCoupon" />
      </template>
      <template #fallback>
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </template>
    </Suspense>
  </div>

  <div class="col-md-8 order-md-1">
    <h4 class="mb-3">Items</h4>
    <form class="needs-validation">

      <Item v-model:name="firstName" v-model:price="firstPrice" v-model:quantity="firstQuantity" />

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
</template>

<style>
  @keyframes rotate {
    to { transform: rotate(360deg); }
  }

  .spinner-border {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    vertical-align: text-bottom;
    border: .25em solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    -webkit-animation: spinner-border .75s linear infinite;
    animation: rotate 1s linear infinite;
  }
</style>
