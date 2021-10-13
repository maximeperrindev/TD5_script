<template>
    <div class="reverser">
      <h3>Reverser</h3>
      <p>{{message}}</p>
      <button v-on:click="reverseMessage">Reverse message</button>
    </div>
</template>

<script>
import store from '../store/store';
import * as type from '../store/mutationTypes/types';
import { mapState } from 'vuex';
export default {
    //Permet d'afficher le contenu de {{message}}
    computed: mapState({
      message: function(state){
       return state.message;
     }
    }),
    methods: {
        //On call le process de Reverse dans notre store.js
        reverseMessage(){
            store.dispatch({
            type: type.Reverse,
          })
        },
    }
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>