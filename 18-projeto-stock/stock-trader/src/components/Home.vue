<template>
  <div>
    <h1 class="display-3 font-weight-light mb-4">Negocie e Consulte suas ações</h1>
    <v-sheet :elevation="6" color="primary" class="pa-2">
      <v-icon class="white--text mr-3">info</v-icon>
      <span class="headline white--text font-weight-light">
        Você pode Salvar & Carregar os dados
      </span>
    </v-sheet>
    <v-sheet :elevation="6" color="success darken-1" class="pa-2 mt-3">
      <v-icon class="white--text mr-3">info</v-icon>
      <span class="headline white--text font-weight-light">
        Clique em 'Finalizar Dia' para iniciar um novo dia!
      </span>
    </v-sheet>
    <v-divider class="my-4"></v-divider>
    <p class="display-1"><strong>Seu saldo:</strong> {{ funds | currency }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds(){
      return this.$store.getters.funds
    }
  }
}
</script>

<style>

</style>