<template>
  <div id="day-select">
    <ul class="days">
      <li
        v-bind:class="{ day: true, active: isActive(day) }"
        v-for="day in days"
        v-on:click="selectDay(day)"
        :key="day.toISOString()"
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
import moment from "moment";
export default {
  props: ["selected"],
  emits: ["set-day"],
  data() {
    return {
      days: [0, 1, 2, 3, 4, 5, 6].map(num => moment().add(num, "days"))
    };
  },
  methods: {
    formatDay(raw) {
      if (raw.isSame(moment(), "day")) {
        return "Today";
      } else {
        return raw.format("ddd DD/MM");
      }
    },
    isActive(day) {
      return day.isSame(this.selected, "day");
    },
    selectDay(day) {
      this.$emit("set-day", day);
    },
    changeDay(change) {
      const newDay = moment(this.selected).add(change, "days");
      if (this.days.find(day => newDay.isSame(day, "day"))) {
        this.selectDay(newDay);
      }
    }
  }
};
</script>
