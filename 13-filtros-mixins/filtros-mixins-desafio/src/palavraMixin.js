export default {
	computed: {
		fraseComVirgula(){
			return this.palavra.replace(/ /g, ',')
		},
		fraseComTamanho(){
			return this.palavra.split(' ').map(p => `${p} (${p.length})`).join(' ')
		}
	}    
}