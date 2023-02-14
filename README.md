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
const less = require("gulp-less");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");

function css(done) {
  src("src/less/app.less")
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write("."))
    .pipe(dest("public/build/css"));

  done();
}

function dev(done) {
  watch("src/less/**/*.less", css);
  done();
}

exports.css = css;
exports.dev = dev;
exports.default = series(css);
```

## Execução do Gulp

Por fim, você pode executar o Gulp para compilar seus arquivos LESS em CSS usando o seguinte comando:

```
gulp dev
```

Este comando irá compilar seus arquivos LESS e gerar um arquivo CSS compilado, além de gerar um mapa de origem para ajudar na depuração do código.

## Referências adicionais

Para obter mais informações sobre o Gulp e seus plug-ins, você pode consultar a documentação oficial em [Gulpks](https://gulpjs.com/).
