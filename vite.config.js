import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default {
  plugins: [vue(), vueJsx()],
  base: './',
  vueCompilerOptions: {
    isCustomElement: tag => /^x-/.test(tag)
  }
};
