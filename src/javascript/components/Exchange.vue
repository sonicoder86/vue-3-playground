<script>
import { defineComponent } from 'vue';

export default defineComponent({
  async setup() {
    const url = 'http://data.fixer.io/api/latest?access_key=534719332efb7559a8f331ef73491776&format=1';
    const response = await fetch(url);
    const exchangeRates = await response.json();

    return { rates: exchangeRates.rates };
  }
});
</script>

<template>
<ul class="list-group">
  <li class="list-group-item">Change to USD: {{ rates.USD }}</li>
  <li class="list-group-item">Change to GBP: {{ rates.GBP }} </li>
</ul>
</template>

