<template>
<div class="mb-3">
  <slot :label="label">
    <label for="username">Default label</label>
  </slot>
  <div class="input-group">
    <div class="input-group-prepend"></div>
    <input type="text" class="form-control" id="username" placeholder="Username" />
    <div class="invalid-feedback" style="width: 100%;">
      Your username is required.
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Username',

  setup() {
    return { label: 'Username' };
  }
});
</script>
