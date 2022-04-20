import Vue from 'vue';
import Buefy from 'buefy';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(Buefy, {
  defaultIconPack: 'fa',
});

new Vue({
  render: h => h(App),
}).$mount('#app');
