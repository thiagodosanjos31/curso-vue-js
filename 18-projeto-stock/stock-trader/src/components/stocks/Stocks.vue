<template>
  <v-layout row wrap>
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"/>
  </v-layout>
</template>

<script>
import Stock from './Stock'
export default {
  components: {Stock},
  data(){
    return {
      stocks: [
        { id: 1, name: 'BMW', price: 110},
        { id: 2, name: 'Apple', price: 300},
        { id: 3, name: 'Spotify', price: 250},

      ]
    }
  }
}
</script>

<style>

</style>