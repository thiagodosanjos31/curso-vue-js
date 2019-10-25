<template>
	<v-app>
		<menu-lateral/>
		<menu-cabecalho/>
		<v-content>
			<carrosel/>
		</v-content>
		<footer-vue/>
	</v-app>
</template>

<script>
import Footer from './components/templates/Footer'



export default {
components:{
	footerVue: Footer, //com camel case o vue identifica que pode ser utilizado com HIFEN também: <footer-vue>
}
}
</script>
