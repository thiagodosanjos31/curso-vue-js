<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase mr-4">
      <span>Stock</span>
      <span class="font-weight-light">Trader</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat to="/">
        Inicio
      </v-btn>
      <v-btn flat to="/portfolio">
        Portfolio
      </v-btn>
      <v-btn flat to="/stocks">
        Ações
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat @click="endDay">Finalizar dia</v-btn>
      <v-menu offset-y>
        <v-btn flat slot="activator">Salvar & Carregar</v-btn>
        <v-list>
          <v-list-tile>
            <v-list-tile-title @click="saveData">Salvar Dados</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title @click="loadDataLocal">Carregar Dados</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-layout align-center>
        <span class="text-uppercase grey-text text--darken-2">
          Saldo: R$ {{ funds  }}
        </span>
      </v-layout>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import {mapActions} from 'vuex'


export default {  
  computed: {
    funds(){
      return this.$store.getters.funds
    }
  },
  methods: {
    ...mapActions(['randomizeStocks', 'loadData']),endDay(){
      this.randomizeStocks()
    },
    saveData(){
      const { funds, stockPortfolio, stocks } = this.$store.getters
      this.$http.put('data.json', { funds, stockPortfolio, stocks })
    },
    loadDataLocal(){
      this.loadData()
    }
  }
}
</script>

<style>

</style>