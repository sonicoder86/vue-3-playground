module.exports = {
  base: './',
  vueCompilerOptions: {
    isCustomElement: tag => /^x-/.test(tag)
  }
};
