## Vantagens

Fluxo de desenvolvimento:
O Vue Client traz Recursos adicionais como Ambiente de Dev & Build Configurados, Compila os componentes em um único arquivos, pré-processadores e mais.

O Vue Client permite a configuração inicial e que você defina aquelas configurações como "Preset" para poder utilizá-la como padrão.


## Inicializando um projeto simples
-> npm install -g @vue/cli
-> vue create nome-do-projeto
-> cd nome-do-projeto
-> npm run serve (para rodar no ambiente de desenvolvimento)


* Interessante instalar o plugin vue e também o vetur no VSC 
* Scaffold deveria gerar o template automatico


## Build em produção
O app.js fica em memória no ambiente de desenvolvimento.<br>
Para isso é necessário executar o comando
```shell
npm run build
```
Onde irá gerar a pasta dist. <br>
A partir desse contexto, a pasta poderá ser copiada e publicada no servidor que você deseja.

## Criando o template Preset
Selecionar a opção manualmente:<br>
* PWA
* Router
* Vuex
* CSS Pre-processors
* Linter

Respostas seguintes: <br>
-> Yes <br>
-> Saas <br>
-> Eslint with error prevention only <br>
-> Lint on save <br>
-> In package.json <br>
-> Yes -> Nome-Do-Preset <br>

.vuerc : é o nome do arquivo que armazena os presets<br>

## Adicionando plugins
O inicio da sintaxe das dependências é vue-cli-plugin- portanto para adicionar uma nova dependência basta:
```shell
vue add nome-da-dependencia
```
Exemplo abaixo, se quisermos adicionar o electron-builder (cuja finalidade é construir a aplicação para desktop):
```shell
vue add electron-builder
```
Para testar esse plugin, basta:
```shell
npm run electron:serve
```
* Ver também: vue add vuetify<br>
Para construir o build da aplicação:
```shell
npm run electron:build
```