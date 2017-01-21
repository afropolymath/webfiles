import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import store from './store';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ActivityIndicator from './components/ActivityIndicator';
import GenericModal from './components/GenericModal';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  {
    name: 'login',
    path: '/',
    component: Login,
  },
  {
    name: 'dashboard',
    path: '/app',
    component: Dashboard,
  },
];

const router = new VueRouter({
  routes,
});

(new Vue({
  router,
  store,
  components: {
    ActivityIndicator,
    GenericModal,
  },
})).$mount('#app');
