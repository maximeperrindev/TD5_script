<template>
      <div class="counter">
      <h3>Counter</h3>
      <input type="number" v-model="incr">
      <div>
        <input type="number" v-model="value">
        <button v-on:click="setCounter">Set the counter to {{value}}</button>
      </div>
      <button v-on:click="addCounter">You clicked {{count}}</button>
    </div>
</template>

<script>
import store from '../store/store';
import * as type from '../store/mutationTypes/types';
import { mapState } from 'vuex';

export default {
computed: mapState({
    //On affiche la valeur sous la forme {{count}}
      count: function(state){
       return state.count;
     }
    }),
methods: {
    //addCounter incrémente ou décremente en fonction de la valeur this.incr
        addCounter(){
            store.dispatch({
            type: type.Increment,
            amount: parseInt(this.incr)
          })
        },
    //setCounter set la valeur de count via la valeur de this.value
        setCounter(){
            store.dispatch({
            type: type.Set,
            amount: parseInt(this.value)
            })
        }
    },
    //Variables locales au component
    data: function() {
        return {
            incr: 1,
            value: 0
        }
    }
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>