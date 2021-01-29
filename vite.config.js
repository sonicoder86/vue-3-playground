import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => /^x-/.test(tag)
        }
      }
    }),
    vueJsx()
  ],
  base: './',
};
