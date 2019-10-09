new Vue (
    {
        el:'#desafio',
    data: {
        nome: 'Thiago Alves',
        idade: 21,
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCW0ThoovWFBkfTKKeBziBKLTeFHTEPXpokJ3LtyU4ap_n5no9'
    }, methods:{
        calcularIdade: function (){
            return this.idade * 3
        },
        exibirNumeroRandomico: function (){
            return Math.random()
        }
    }

})