<script>
import { inject } from 'vue';
import { versionSymbol } from './version-symbol';

export default {
  name: 'Header',
  setup() {
    return {
      version: inject(versionSymbol)
    };
  }
};
</script>

<template>
<div class="py-5 text-center">
  <img class="d-block mx-auto mb-4" src="../logo.png" alt="" width="72" height="72">
  <h2>Vue {{ version }} Showcase</h2>
  <p class="lead">
    Below is an example form built with the Vue {{ version }} Composition API.
  </p>
</div>
</template>
