<template>
  <div
    v-bind:class="{ 'check-filter': true, active: state.checked }"
    v-on:click="checkFilter"
  >
    <span class="checkbox"></span>
    <span class="check-filter-title">{{ title }}</span>
  </div>
</template>
<script>
import { reactive } from "vue";
export default {
  props: ["title"],
  emits: ["check-filter"],
  setup(props, context) {
    const state = reactive({
      checked: false
    });
    function checkFilter() {
      state.checked = !state.checked;
      context.emit("check-filter", state.checked);
    }
    return {
      state,
      checkFilter
    };
  }
};
</script>
