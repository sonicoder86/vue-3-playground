<script>
import { ref } from 'vue';

export default {
  name: 'Coupon',
  props: ['percent'],
  setup(props, { emit }) {
    const percent = ref(props.percent);
    const useCoupon = () => emit('select', percent.value);

    return { percent, useCoupon };
  }
}
</script>

<template>
<form class="card p-2">
  <div class="input-group">
    <input v-model="percent" type="text" class="form-control" placeholder="Promo code">
    <div class="input-group-append">
      <button @click="useCoupon" type="button" class="btn btn-secondary">Redeem</button>
    </div>
  </div>
</form>
</template>
