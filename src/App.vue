<script>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import Header from './Header.vue';
import { provideVersion } from './version';

export default {
  name: 'App',
  components: { Header },
  setup() {
    const store = useStore();
    provideVersion();

    onMounted(() => {
      store.dispatch('onSetYear', new Date().getFullYear());
    });
  }
};
</script>

<template>
<Header />
<router-view />
</template>
