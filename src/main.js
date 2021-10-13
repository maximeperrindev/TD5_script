import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'
import Reverser from './components/Reverser.vue'
import store from './store/store.js'

Vue.use(VueRouter)
Vue.config.productionTip = false
    //Configuration des routes
const routes = [
        { path: '/', component: HelloWorld },
        { path: '/counter', component: Counter },
        { path: '/reverser', component: Reverser }

    ]
    //Création du router
const router = new VueRouter({
        routes // short for `routes: routes`
    })
    //On ajoute dans la vue la gestion de store ainsi que le routeur
    //Le router permet d'utiliser <router-view></router-view> et donc d'afficher dynamiquement un component en fonction de la route
new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')