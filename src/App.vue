<template>
  <div id="app">
    <div id="title">
      <img src="/public/logo.png" />
      <h1>Vue.js Cinema</h1>
    </div>
    <keep-alive>
      <router-view
        v-bind:genre="genre"
        v-bind:time="time"
        v-bind:movies="movies"
        v-bind:day="day"
      ></router-view>
    </keep-alive>
  </div>
</template>

<style lang="scss"></style>
