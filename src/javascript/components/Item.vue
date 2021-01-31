<script>
export default {
  name: 'Item',
  props: ['name', 'price', 'quantity'],
  emits: ['update:name', 'update:price', 'update:quantity'],

  setup(props, { emit }) {
    const updateName = value => emit('update:name', value);
    const updatePrice = value => emit('update:price', value);
    const updateQuantity = value => emit('update:quantity', value);

    return { updateName, updatePrice, updateQuantity };
  }
};
</script>

<template>
<div class="row">
  <div class="col-md-6 mb-3">
    <label for="item-name">Name</label>
    <input :value="name" @input="updateName($event.target.value)" type="text" class="form-control" id="item-name">
  </div>
  <div class="col-md-3 mb-3">
    <label for="item-price">Price</label>
    <input :value="price" @input="updatePrice($event.target.value)" type="number" class="form-control" id="item-price">
  </div>
  <div class="col-md-3 mb-3">
    <label for="item-quantity">Quantity</label>
    <input :value="quantity" @input="updateQuantity($event.target.value)" type="number" class="form-control" id="item-quantity">
  </div>
</div>
</template>

