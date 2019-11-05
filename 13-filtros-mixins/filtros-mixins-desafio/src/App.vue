<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		{{ palavra | trocarEspacoPorVirgula}}
		<hr>
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		{{ palavra | contadorDeLetras}}
		<hr>
		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		{{ fraseComVirgula }}
		<hr>
		{{ fraseComTamanho }}
		<hr>
		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
import palavraMixin from './palavraMixin'

export default {
	mixins: [palavraMixin],
	filters:{
		trocarEspacoPorVirgula(valor){
			return valor.replace(/ /g, ',')
		}
	},
	data(){
		return {
			palavra: 'espaço por virgula'
		}
	},

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
