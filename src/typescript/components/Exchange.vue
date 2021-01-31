<script lang="ts">
interface ApiResponse {
  rates: {
    USD: string,
    GBP: string
  }
}

export default {
  async setup() {
    const response = await fetch('https://api.exchangeratesapi.io/latest');
    const exchangeRates: ApiResponse = await response.json();

    return { rates: exchangeRates.rates };
  }
};
</script>

<template>
<ul class="list-group">
  <li class="list-group-item">Change to USD: {{ rates.USD }}</li>
  <li class="list-group-item">Change to GBP: {{ rates.GBP }} </li>
</ul>
</template>

