<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="mensagem in mensagens" :key="mensagem.texto" :variant="mensagem.tipo">

			{{mensagem.texto}}
		</b-alert>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg"
				v-model="usuario.nome"
				placeholder="Informe o nome"></b-form-input>
			</b-form-group>
			<b-form-group label="E-mail:">
				<b-form-input type="email" size="lg"
				v-model="usuario.email"
				placeholder="Informe o e-mail"></b-form-input>
			</b-form-group>
			<hr>
			<b-button variant="primary" @click="salvar" size="lg">Salvar</b-button>
			<b-button variant="success" @click="obterUsuarios" size="lg"  class="ml-2">Obter Usuários</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome: </strong>{{ usuario.nome }} <br>
				<strong>E-mail: </strong>{{ usuario.email }} <br>
				<strong>ID: {{ id }}</strong><br>
				<b-button variant="warning" size="lg" @click="carregar(id)">Carregar</b-button>
				<b-button variant="danger" size="lg" @click="excluir(id)" class="ml-2">Excluir</b-button>
			</b-list-group-item>
			
		</b-list-group>
	</div>
</template>

<script>
/*
USANDO AXIOS LOCALMENTE
import axios from 'axios'
PARA CHAMAR DEPOIS BASTA UTILIZAR
axios.get('URLBASE').then()
*/


export default {
	// created(){
	// 	this.$http.post('usuarios.json',{
	// 		nome: 'Maria',
	// 		email: 'maria@maria.com'
	// 	}).then(res => console.log(res))
	// }
	data(){
		return{
			mensagens: [],
			usuarios: [],
			id: null,
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		limpar(){
			this.usuario.nome = ''	
			this.usuario.email =''
			this.id = null
			this.mensagens = []
		},
		salvar(){
			// this.$http.post('usuarios.json', this.usuario)
			// .then(() => this.limpar())
			const metodo = this.id ? 'patch' : 'post'
			const finalUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
			.then( _ => 
				this.limpar(),
				this.mensagens.push({
					texto: 'Operação realizada com sucesso!',
					tipo: 'success'
				})
			)
		},
		carregar(id){
			this.id = id
			this.usuario = { ...this.usuario[id]}
		},
		excluir(id){
			this.$http.delete(`/usuario/${id}.json`).then(() => this.limpar())
			.catch(err => {
				this.mensagens.push({
					texto: 'Problema para excluir',
					tipo: 'danger'

				})
			})
		},
		obterUsuarios(){
			this.$http('usuarios.json').then(res => {
				this.usuarios = res.data
				// console.log(this.usuarios)
			})
			// this.$http.get('usuarios.json') -> UMA ALTERNATIVA

			// this.$http.defaults.headers.common['Authorization'] = 'token'
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
