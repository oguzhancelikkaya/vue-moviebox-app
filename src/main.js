import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import { store } from './store/store';

Vue.use(VueResource);
Vue.use(VueRouter);

export const eventBus = new Vue();

Vue.http.options.root = 'https://vue-moviebox-app.firebaseio.com/';

const router = new VueRouter({
  routes,
  mode:'history'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
