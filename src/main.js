import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Router from 'vue-router'
import {routes} from './router'

Vue.use(Router);

const router = new Router({
    routes,
    mode: 'history'
});

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
