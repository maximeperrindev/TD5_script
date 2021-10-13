//Fichier qui permet de gérer les state et le stockage
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        count: 0,
        message: 'hello'
    },
    mutations: {
        increment(state, payload) {
            return state.count = state.count + payload.amount;
        },
        set(state, payload) {
            return state.count = payload.amount;
        },
        reverse(state) {
            return state.message = state.message.split('').reverse().join('');
        }
    },
    actions: {
        increment(context, payload) {
            context.commit('increment', payload)
        },
        set(context, payload) {
            context.commit('set', payload)
        },
        reverse(context) {
            context.commit('reverse')
        }
    }
})
export default store;