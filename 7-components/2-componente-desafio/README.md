# componente-desafio

* Os três passos básicos para criar um componente (globalmente) é:
1. Abstrair uma funcionalidade e criar um arquivo separadamente com o Nome.vue
2. Após codificado, na main.js, deve-se importá-lo e usar com Vue.component('nome-que-sera-a-tag', NomeDoComponente)
3. No app.js, onde todo o conteúdo está sendo renderizado, deverá ser incluso o <nome-que-sera-a-tag/>


* Segundo método para criar componentes localmente:
1. Abstrair uma funcionalidade e criar um arquivo separadamente com o Nome.vue
2. Importar no componente que irá utilizar o seu arquivo através da sessão script
3. Dentro do export default utilizar o components: { 'nome-que-sera-a-tag': NomeDoComponente }
4. No próprio component, utilizar a tag

```shell
Importante: importar components a partir de @/, significa que você está disponibilizando o caminho a partir da pasta SRC. Por exemplo:
@/components/templates/Footer.Vue 
```


Se você quiser aprender mais sobre componentes Vue JS, você talvez queira olhar esse artigo da documentação oficial:

https://br.vuejs.org/v2/guide/components.html

Também ver: https://br.vuejs.org/v2/guide/components-registration.html