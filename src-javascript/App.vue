<script>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import Header from './components/Header.vue';
import { provideVersion } from './version';

export default {
  name: 'App',
  components: { Header },
  setup() {
    const { dispatch } = useStore();
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
