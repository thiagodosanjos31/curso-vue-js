<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="exibir = !exibir">Mostrar mensagem</b-button>

		<transition name="fade">
			<b-alert variant="info" show v-if="exibir"> {{ msg }}</b-alert>
		</transition>
		<transition name="slide" type="animation">
			<b-alert variant="info" show v-show="exibir"> {{ msg }}</b-alert>
		</transition>
		<!-- ELEMENTO DO TIPO TYPE DEFINE QUEM MANDA NA TRANSIÇÃO
		ESSE CENÁRIO É INTERESSANTE PARA TRANSIÇÕES QUE POSSUEM
		ANIMAÇÕES COM VALORES DE DURAÇÃO MUITO DIFERENTES
		PORTANTO, VOCÊ PODE INSERIR O TYPE REFERINDO-SE À TRANSIÇÃO
		DE MENOR TEMPO. -->

		<!-- PROPRIEDADE DO TIPO "APPEAR" SERVE PARA APLICAR OS EFEITOS
		DE TRANSIÇÃO NO MOMENTO EM QUE A TELA É CARREGADA, SOMENTE SERÃO
		EXIBIDOS AQUELES QUE TIVEREM O "ATRIBUTO" EXIBIR COMO TRUE-->
		
		<transition 
		enter-active-class="animated bounce"
		leave-active-class="animated shake">
			<b-alert variant="info" show v-show="exibir"> {{ msg }}</b-alert>
		</transition>
		<hr/>
		<b-select v-model="tipoAnimacao">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>
		<transition :name="tipoAnimacao" mode="out-in">			
		    <b-alert variant="info" show v-if="exibir" key="info"> {{ msg }}</b-alert>
			<b-alert variant="warning" show v-else key="warn"> {{ msg }}</b-alert>
		</transition>
		 
		 <hr>
		 <button @click="exibir2= !exibir2">Alternar</button>
		 <transition
		 	:css="false"
		 	@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"

			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled"
		 >
			 <div v-if="exibir2" class="caixa"></div>
		 </transition>
		 <!-- UTILIZAR :css="false" PARA QUE NENHUMA CLASSE IMPACTE NAS TRANSIÇÕES
		 REALIZADAS POR JAVASCRIPT-->
		 <hr>
		 <div>
			<b-button variant="primary" class="mr-2" @click="componenteSelecionado = 'AlertaInfo'">Info</b-button>
			<b-button variant="secondary" @click="componenteSelecionado = 'AlertaAdvertencia'">Advertência</b-button>
		 </div>
		 <transition name="fade" mode="out-in">
		 <component :is="componenteSelecionado"/>
		 </transition>

		 <hr><br><br><br><br><br><br><br><br><br><br><br><br>

		 <hr>
		 <b-button @click="adicionarAluno" class="mb-4">Adicionar Aluno</b-button>
		 <transition-group name="slide">
		 <b-list-group v-for="(aluno,i) in alunos" :key="aluno">
			 <b-list-group-item @click="removerAluno(i)">{{ aluno }}</b-list-group-item>
		 </b-list-group>
		 </transition-group>
	</div>
	<!-- PODE INSERIR UMA PROPRIEDADE tag NO TRANSITION GROUP PARA QUE
	OS ELEMENTOS FILHOS TENHAM UM ELEMENTO PAI RENDERIZADO, POR EXEMPLO
	tag="div" TODOS OS ITENS TERAM EM UMA DIV COM SEU PAI -->
</template>

<script>
import AlertaAdvertencia from './AlertaAdvertencia'
import AlertaInfo from './AlertaInfo'

export default {
	components: {
		AlertaAdvertencia,
		AlertaInfo
	},
	data(){
		return {
			alunos: ['Roberto', 'Julia', 'Teresa', 'Paulo'],
			msg: 'Uma mensagem de informação para o usuário!',
			exibir: false,
			exibir2: true,
			tipoAnimacao: 'fade',
			larguraBase: 0,
			componenteSelecionado: 'AlertaInfo'
		}
	},
	methods: {
		adicionarAluno(){
			const s = Math.random().toString(36).substring(2)
			this.alunos.push(s)
		},
		removerAluno(indice){
			this.alunos.splice(indice, 1)
		},
		animar(el, done, negativo){
			let rodada = 1
			const temporizador = setInterval(() => {
				const novaLargura = this.larguraBase +
				(negativo ? -rodada * 10 : rodada * 10)
				el.style.width = `${novaLargura}px`
				rodada++
				if(rodada > 30){
					clearInterval(temporizador)
					done()
				}
			}, 20)

		},
		beforeEnter(el){
			this.larguraBase = 0
			el.style.width = `${this.larguraBase}px`
		},
		enter(el, done){
			this.animar(el, done, false)
		},
		afterEnter(el){
			console.log('afterEnter')
		},
		enterCancelled(){
			console.log('enterCancelled')
		},
		beforeLeave(el){
			this.larguraBase = 300
			el.style.width = `${this.larguraBase}px`
		},
		leave(el, done){
			this.animar(el, done, true)
		},
		afterLeave(el){
			console.log('afterLeave')
		},
		leaveCancelled(){
			console.log('leaveCancelled')
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
	font-size: 1.5rem;
}

.caixa {
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: lightgreen;
}

.fade-enter, .fade-leave-to {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 2s;
}

/* .fade-enter-to {
	opacity: 1;
}

.fade-leave {
	opacity: 1;
} */

@keyFrames slide-in {
	from { transform: translateY(40px); }
	to { transform: translateY(0); }
}

@keyframes slide-out {
	from {transform: translateY(0);}
	to { transform: translateY(40px); }
}

.slide-enter-active {
	animation: slide-in 2s ease;
	transition: opacity 2s;
}

.slide-leave-active {
	position: absolute;
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-enter, .slide-leave-to {
	opacity: 0;
}

.slide-move {
	transition: transform 1s;
}
</style>


