<h1 style="text-align: center;">Guia de configuração completo do Gulp para iniciantes com LESS.</h1>

## O que é o Gulp

O Gulp é uma ferramenta de automação de tarefas para desenvolvedores web. Ele permite que você automatize tarefas repetitivas, como compilação de arquivos LESS em CSS, minificação de arquivos, entre outros.

## Pré-requisitos

Antes de começar a configurar o Gulp, você precisa ter o Node.js instalado em seu computador. Caso não tenha, você pode baixá-lo em [Nodejs](https://nodejs.org/).

Inicialização do Node.js
Abra o terminal e execute o seguinte comando para inicializar o Node.js em seu projeto:

```
npm init -y
```

## Instalação do Gulp global

Agora, você precisa instalar o Gulp globalmente em seu computador para poder executá-lo a partir do terminal. Execute o seguinte comando:

```
npm install -g gulp
```

## Instalação de plug-ins

Agora, você precisa instalar os seguintes plug-ins para o seu projeto:

```
npm install --save-dev gulp-less gulp-postcss autoprefixer sourcemaps
```

- gulp-less é um plug-in para compilar arquivos LESS em CSS.
- gulp-postcss é um plug-in para usar plugins PostCSS com o Gulp.
- autoprefixer é um plug-in PostCSS para adicionar prefixos automáticos ao seu CSS para garantir a compatibilidade com diferentes navegadores.
- sourcemaps é um plug-in para gerar mapas de origem para seu CSS compilado, o que facilita a depuração do código.

## Criação e configuração do arquivo gulpfile.js

Agora, você precisa criar um arquivo gulpfile.js na raiz do seu projeto e adicionar a seguinte configuração:

```
const { src, dest, watch, series } = require("gulp");
```

## Esta é a sintaxe para importar módulos do Gulp para o seu arquivo de configuração. Aqui, estamos importando quatro módulos:

- src: É uma função que especifica o local dos arquivos de origem. Você pode usá-lo para selecionar todos os arquivos LESS que deseja compilar.

- dest: É uma função que especifica o local onde você deseja salvar os arquivos compilados.

- watch: É uma função que monitora as alterações em seus arquivos de origem e executa uma tarefa específica sempre que algum arquivo for alterado.

- series: É uma função que permite executar várias tarefas em série, ou seja, uma tarefa após a outra.

Ao importar esses módulos, você está disponibilizando as funcionalidades do Gulp para o seu arquivo de configuração, permitindo automatizar várias tarefas em seu fluxo de trabalho.

```
const less = require("gulp-less");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
```

## Esta é a sintaxe para importar os plugins necessários para o seu processo de compilação de LESS. Aqui, estamos importando quatro plugins:

- gulp-less: Este plugin permite compilar o seu código LESS em CSS.

- gulp-postcss: Este plugin permite aplicar vários plugins PostCSS em seus arquivos CSS, como o autoprefixer.

- autoprefixer: Este plugin permite adicionar prefixos automaticamente aos seus estilos CSS para garantir a compatibilidade com vários navegadores.

- gulp-sourcemaps: Este plugin permite gerar mapas de origem para seus arquivos CSS, permitindo depurar seus estilos mais facilmente.

Ao importar esses plugins, você está disponibilizando suas funcionalidades para o seu processo de compilação de LESS, o que torna o processo mais eficiente e personalizável.

```

function css(done) {
  src("src/less/app.less")
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write("."))
    .pipe(dest("build/css"));

  done();
}

function dev(done) {
  watch("src/less/**/*.less", css);
  done();
}

```

## Esta é uma função Gulp que define as tarefas para compilar seus arquivos LESS em CSS e monitorar as alterações nos arquivos LESS.

A função css realiza as seguintes etapas:

- src("src/less/app.less"): Este é o arquivo de entrada para o processo de compilação, ou seja, o arquivo LESS que você deseja compilar em CSS.

- .pipe(sourcemaps.init()): Inicia a geração de mapas de origem para o seu arquivo CSS.

- .pipe(less()): Compila o arquivo LESS em CSS.

- .pipe(postcss([autoprefixer()])): Aplica o autoprefixer ao seu arquivo CSS.

- .pipe(sourcemaps.write(".")): Escreve os mapas de origem para o seu arquivo CSS.

- .pipe(dest("build/css")): Especifica o diretório de destino para o arquivo CSS compilado.

A função dev é responsável por monitorar as alterações nos arquivos LESS. Quando houver uma alteração, a função css é executada automaticamente.

Essas funções são as tarefas básicas para compilar seu arquivo LESS em CSS e monitorar as alterações. Você pode expandir essas funções e adicionar outras tarefas adicionais para personalizar seu processo de compilação.

```
exports.css = css;
exports.dev = dev;
exports.default = series(css);
```

## Este trecho de código exporta as tarefas que você definiu anteriormente como css e dev. Isso significa que elas podem ser acessadas em outros arquivos e scripts.

- A exportação exports.css = css; significa que a tarefa css pode ser acessada como gulp css.

- A exportação exports.dev = dev; significa que a tarefa dev pode ser acessada como gulp dev.

- A exportação exports.default = series(css); significa que a tarefa padrão será a tarefa css e que será executada quando você digitar gulp sem especificar nenhuma tarefa.

## Execução do Gulp

Por fim, você pode executar o Gulp para compilar seus arquivos LESS em CSS usando o seguinte comando:

```
gulp dev
```

Este comando irá compilar seus arquivos LESS e gerar um arquivo CSS compilado, além de gerar um mapa de origem para ajudar na depuração do código.

## Referências adicionais

Para obter mais informações sobre o Gulp e seus plug-ins, você pode consultar a documentação oficial em [Gulpjs](https://gulpjs.com/).
