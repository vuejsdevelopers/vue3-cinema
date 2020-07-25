<template>
  <div
    v-on:click="checkFilter"
    v-bind:class="{ 'check-filter': true, active: checked }"
  >
    <span class="checkbox"></span>
    <span class="check-filter-title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  emits: ["check-filter"],
  data: () => ({
    checked: false
  }),
  methods: {
    checkFilter() {
      this.checked = !this.checked;
      this.$emit("check-filter", this.checked);
    }
  }
};
</script>
