<script lang="ts">
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import Header from './components/Header.vue';
import { provideVersion } from './version';
import { State } from './store';

export default {
  name: 'App',
  components: { Header },
  setup() {
    const { dispatch } = useStore<State>();
    provideVersion();

    onMounted(() => {
      dispatch('onSetYear', new Date().getFullYear());
    });
  }
};
</script>

<template>
  <Header />
  <router-view />
</template>
