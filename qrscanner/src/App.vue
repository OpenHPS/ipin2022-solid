<template>
  <div id="app">
    <ScannerComponent/>
  </div>
</template>

<script>
import ScannerComponent from './components/ScannerComponent.vue'

export default {
  name: 'App',
  components: {
    ScannerComponent,
  },
}
</script>

<style>
@import "~buefy/dist/buefy.css";

html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
