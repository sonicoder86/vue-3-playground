<script>
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useVersion } from '../version';

export default defineComponent({
  name: 'Header',

  setup() {
    const { state } = useStore();

    return {
      version: useVersion(),
      state
    };
  }
});
</script>

<template>
<div class="py-5 text-center">
  <img class="d-block mx-auto mb-4" src="/logo.png" alt="" width="72" height="72">
  <h2>Vue {{ version }} Playground</h2>
  <p class="lead">
    Below is an example form built with the Vue {{ version }} Composition API.
  </p>
</div>
<Teleport to="#footer">
  <p class="mb-1">&copy; {{ state.year }} <x-username /></p>
</Teleport>
</template>
