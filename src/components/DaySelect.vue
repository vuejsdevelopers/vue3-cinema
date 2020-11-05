<template>
  <div id="day-select">
    <ul class="days">
      <li
        class="day"
        v-for="(day, index) in days"
        :key="index"
        v-bind:class="{ active: isActive(day) }"
        v-on:click="$emit('day-selected', day)"
      >
        {{ formatDay(day) }}
      </li>
      <li class="day-selector">
        <span class="dec" v-on:click="changeDay(-1)"></span>
        <span class="inc" v-on:click="changeDay(1)"></span>
      </li>
    </ul>
  </div>
</template>
<script>
import dayjs from "dayjs";
export default {
  props: {
    day: Object
  },
  emits: ["day-selected"],
  data() {
    return {
      days: [0, 1, 2, 3, 4, 5, 6].map(num => dayjs().add(num, "days"))
    };
  },
  methods: {
    formatDay(raw) {
      if (raw.isSame(dayjs(), "day")) {
        return "Today";
      } else {
        return raw.format("ddd DD/MM");
      }
    },
    isActive(day) {
      return day.isSame(this.day, "day");
    },
    changeDay(change) {
      const newDay = dayjs(this.day).add(change, "days");
      if (this.days.find(day => newDay.isSame(day, "day"))) {
        this.$emit("day-selected", newDay);
      }
    }
  }
};
</script>
