<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do usuário <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn()">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {

    props: {
        // nome: [String, Array], pode ser uma string ou um array
        nome: {
            type: String,
            // required: true, //faz a validação de campo obrigatório
            default: 'Anônimo'
            // default: function() {
            //     return Array(10).fill(0).join(',')
            // }
        },
        reiniciarFn: Function,
        idade: Number
    },
    // data() {
    //     nomeAlternativo: this.nome
    // },
    methods: {
        inverterNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            // const antigo = this.nome
            // this.nome = 'Pedro'
            // this.$emit('nomeMudou', {
            //     novo: this.nome,
            //     antigo
            // })
            this.$emit('nomeMudou', 'Pedro')
        }
    },
    created(){
        barramento.quandoIdadeMudar(idade => {
            this.idade = idade
        })
    }

}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
