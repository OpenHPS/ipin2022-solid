<template>
  <div id="app">
    <MainPage/>
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue'

export default {
  name: 'App',
  components: {
    MainPage,
  },
}
</script>

<style>
@import "~buefy/dist/buefy.css";
@import "~vuelayers/dist/vuelayers.css";

html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
