new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlert(){
            alert('Estou sendo exibido!')
        },
        armazenarValor(e){
            return this.valor = e.target.value
        }
    }
})