import Vue from 'vue';
import App from './components/app.component';
import router from './router';
import '@ionic/core/dist/ionic';

Vue.config.ignoredElements = [/^ion-/];

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
