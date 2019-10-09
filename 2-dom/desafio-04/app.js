new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		classe1criada: 'primeiraClasseCriada',
		classe2criada: 'segundaClasseCriada',
		classe3: '',
		classe4: '',
		ativa: false,
		box: false,
		corDeFundo: '',
		largura: '20px',
		altura: 30,
		progresso: 0,
		progressoClasse: 'progresso',
		
	},
	methods: {
		iniciarEfeito() {
			return refreshIntervalId = setInterval(() => {
				this.classe1 = this.classe1 == 
				'destaque' ? 'encolher' : 'destaque'
			}, 1000);
		},
		pararEfeito(e){
			clearInterval(e)
		},
		iniciarProgresso() {
			timer = setInterval(() => {
				this.progresso = this.progresso + 5
				if(this.progresso >= 150){
					clearInterval(timer);
				}else{
					return progresso
				}
			}, 200);
		},
		setBox(event){
			if(event.target.value == "true"){
				this.box = true
			}else if(event.target.value == "false"){
				this.box = false
			}
		}
	}
})
