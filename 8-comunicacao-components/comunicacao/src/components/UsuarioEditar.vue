<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do usuário <strong>{{ idade }}</strong></p>
        <button @click="alterarIdade">Alterar Idade</button>
        <button @click="alterarIdadeCb()">Alterar idade (callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props: {
        idade: Number,
        alterarIdadeCb: Function
    },
    methods:{
        alterarIdade(){
            this.idade = 33
            barramento.alterarIdade(this.idade)
        }
    }    
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
