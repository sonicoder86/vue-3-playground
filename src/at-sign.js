export default {
  beforeMount(el, binding, vnode, prevVnode) {
    console.log(`directive: value - ${binding.value}, argument - ${binding.arg}, modifiers - ${JSON.stringify(binding.modifiers)}`);

    el.innerHTML = '<span class="input-group-text">@</span>';
  },
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {}
};
