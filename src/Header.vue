<script>
import { useVersion } from './version';

export default {
  name: 'Header',
  setup() {
    return {
      version: useVersion()
    };
  }
};
</script>

<template>
<div class="py-5 text-center">
  <img class="d-block mx-auto mb-4" src="../logo.png" alt="" width="72" height="72">
  <h2>Vue {{ version }} Playground</h2>
  <p class="lead">
    Below is an example form built with the Vue {{ version }} Composition API.
  </p>
</div>
<Teleport to="#footer">
  <p class="mb-1">&copy; 2020 blacksonic</p>
</Teleport>
</template>
