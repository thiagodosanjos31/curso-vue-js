new Vue (
    {
        el:'#painel',
    data: {
       exibirPainelVue: true
    }, methods:{
        
        
    }, computed: {
        exibindoPainel(){
            return{
                exibirPainel: this.exibirPainelVue,
                esconderPainel: !this.exibirPainelVue
            }
        }
    }

})