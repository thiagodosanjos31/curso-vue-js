<template>
	<div id="app">
		<h1>Diretivas</h1>
		<p v-destaque:fundo.atrasar="{cor1: 'green', atraso: 2000}">Teste</p>
		<!-- <p v-nome:argumento.mod1.mod2.mod3="..."></p> -->
		<p v-destaque-local:fundo.atrasar="{cor1: 'green', cor2: 'red', atraso: 2000, intervalo: 200}">Teste</p>
		<p v-destaque-local.atrasar.alternar="{cor1: 'green', cor2: 'red', atraso: 2000, intervalo: 200}">Teste</p>
	</div>
</template>

<script>
export default {
	components: {

	},
	directives: {
		'destaque-local':{
			bind(el, binding){
				const aplicarCor = cor => {
					if(binding.arg === 'fundo'){
						el.style.backgroundColor = cor
					}else{
						el.style.color = cor
					}
				}

				let atraso = 0
				if(binding.modifiers['atrasar']) atraso = binding.value.atraso 
				
				let cor1 = binding.value.cor1
				let cor2 = binding.value.cor2
				let corAtual = cor1
				setTimeout(() => {
					
					if(binding.modifiers['alternar']) {
						setInterval(()=> {
							corAtual = corAtual === cor1 ? cor2 : cor1
							aplicarCor(corAtual)

						}, binding.value.intervalo)
					}else{
						
						aplicarCor(cor1)
					}				
					
				}, atraso)
			}
		}
	},
	data(){
		return {
			cor: 'red',
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
