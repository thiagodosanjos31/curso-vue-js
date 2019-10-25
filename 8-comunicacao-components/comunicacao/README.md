# comunicacao

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

* As propriedades são case sensitive


## Anotações importantes sobre a aula

* Você pode comunicar componentes de pai para filho através das propriedades
* Para fazer o caminho contrário, uma das maneiras é que você pode criar uma função que dispara o evento (usando this.$emit('eventoCriado', this.variavel)) e passar como segundo parametro o valor alterado. No componente pai, você pode utilizar dentro da tag do componente o @eventoCriado.
* Ou passar uma callback para o elemento filho.


* Usando event bus para comunicação entre elementos irmãos 
1. Você precisa criar uma nova instância do Vue (barramento.js)
2. Em um dos componentes você deve emitir o evento (barramento.$emit('nomeDoEvento', valor))
3. No outro, você deve inserir numa função de ciclo de vida, mais especificamente no  created(){barramento.on('nomeDoEvento', func de callback)}. 