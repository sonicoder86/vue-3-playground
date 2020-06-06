<script lang="ts">
import { useVersion } from '../version';
import { useStore } from 'vuex';
import { State } from '../store';

export default {
  name: 'Header',

  setup() {
    const { state } = useStore<State>();

    return {
      version: useVersion(),
      state
    };
  }
};
</script>

<template>
<div class="py-5 text-center">
  <img class="d-block mx-auto mb-4" src="../../logo.png" alt="" width="72" height="72">
  <h2>Vue {{ version }} Playground</h2>
  <p class="lead">
    Below is an example form built with the Vue {{ version }} Composition API.
  </p>
</div>
<Teleport to="#footer">
  <p class="mb-1">&copy; {{ state.year }} blacksonic</p>
</Teleport>
</template>
