import Vue from 'vue';
import Buefy from 'buefy';
import VueLayers from 'vuelayers';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(Buefy, {
  defaultIconPack: 'fa',
});
Vue.use(VueLayers, {
  dataProjection: 'EPSG:4326',
});

new Vue({
  render: h => h(App),
}).$mount('#app');
