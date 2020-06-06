import { DirectiveBinding, VNode } from 'vue';

export default {
  beforeMount(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, prevVnode: VNode | null) {
    console.log(`directive: value - ${binding.value}, argument - ${binding.arg}, modifiers - ${JSON.stringify(binding.modifiers)}`);

    el.innerHTML = '<span class="input-group-text">@</span>';
  },
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {}
};
