import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'Spinner',

  render() {
    return h(
      'div', { class: 'spinner-border', role: 'status' },
      [
        h('span', { class: 'sr-only' }, 'Loading...')
      ]
    );
  }
});
