<template>
  <div id="app">
    <MapComponent/>
  </div>
</template>

<script>
import MapComponent from './components/MapComponent.vue'

export default {
  name: 'App',
  components: {
    MapComponent,
  },
}
</script>

<style>
@import "~buefy/dist/buefy.css";
@import "~vuelayers/dist/vuelayers.css";

html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
