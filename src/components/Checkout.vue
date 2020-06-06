<script>
import { useRoute } from 'vue-router';

export default {
  name: 'Checkout',

  setup() {
    const { path } = useRoute();

    return { path };
  }
};
</script>

<template>
<div class="row">
  <div class="col-md-8 order-md-1">
    <h4 class="mb-3">Checkout</h4>
    <p>{{ path }}</p>
    <router-link to="/" class="btn btn-primary btn-lg btn-block">Back to cart</router-link>
  </div>
</div>
</template>
