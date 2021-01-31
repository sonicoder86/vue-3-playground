<script lang="ts">
import { ref, SetupContext } from 'vue';
type EmitOption = 'redeem';
type Props = { percent: number };

export default {
  name: 'Coupon',
  props: ['percent'],
  emits: ['redeem'],

  setup(props: Props, { emit }: SetupContext<EmitOption[]>) {
    const percent = ref(props.percent);
    const useCoupon = () => emit('redeem', percent.value);

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
