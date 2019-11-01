<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="formulario">
				<div class="cabecalho">Formulário</div>
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<!-- Nome completo (Nome e Sobrenome) -->
				<!-- Email -->
				<!-- Senha -->
				<!-- Armazenar Dados? (Sim/Não) -->

				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário se não tiver sido submetido -->
				<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
				
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->



				<NomeCompleto v-model="nomeCompleto"/>
				<Rotulo nome="Email">					
					<input type="text" v-model="usuario.Email">
				</Rotulo>
				<Rotulo nome="Senha">					
					<input type="password" v-model="usuario.Senha">
				</Rotulo>
				<Rotulo nome="Armazenar dados?">
				<label for="sim">Sim</label>
				<input type="radio" name="armazenar" id="sim" value="true" v-model="Armazenar">	
				<label for="nao">Nao</label>
				<input type="radio" name="armazenar" id="nao" value="false" v-model="Armazenar">	
				</Rotulo>
				<button @click.prevent="enviar">Enviar</button>
			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="Nome">					
					<span>{{ nomeCompleto.nome }}</span>
				</Rotulo>
				<Rotulo nome="Sobrenome">					
					<span>{{ nomeCompleto.sobrenome }}</span>
				</Rotulo>
				<Rotulo nome="Email">					
					<span>{{ usuario.Email }}</span>
				</Rotulo>
				<Rotulo nome="Senha">					
					<span>{{ usuario.Senha }}</span>
				</Rotulo>
				<Rotulo nome="Armazenar dados?">
					{{ Armazenar}}
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import NomeCompleto from './components/NomeCompleto.vue'

export default {
	name: 'app',
	components: { Rotulo, NomeCompleto },
	data(){
		return {
			nomeCompleto: {
				nome: '',
				sobrenome: '',
			},
			usuario: {			
				
				Email: '',
				Senha: '',
				
			},
			Armazenar: true,
			formulario: true
		}
	},
	methods: {
		enviar(){
			this.formulario = !this.formulario
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
