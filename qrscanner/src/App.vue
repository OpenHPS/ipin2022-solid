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

html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
