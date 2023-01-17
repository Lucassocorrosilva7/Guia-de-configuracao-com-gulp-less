// Exemplo - 01
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

//Exemplo - 02
// var gulp = require('gulp');
// var less = require('gulp-less');

// gulp.task('less', function () {
//   return gulp.src('./less/*.less')
//     .pipe(less())
//     .pipe(gulp.dest('./css'));
// });

// gulp.task('watch', function () {
//   gulp.watch('./less/*.less', gulp.series('less'));
// });

// gulp less
// gulp watch - compilar o less em loop

/*
O pipe do gulp é usado para encadear várias tarefas juntas. Ele 
permite que você encadeie várias funções de transformação de arquivos 
juntas e execute-as de forma sequencial, permitindo que você automatize 
tarefas de desenvolvimento como minificação de arquivos, concatenação 
de arquivos e outras operações comuns. Isso permite que você faça muitas 
coisas de uma só vez e economize tempo e esforço.
*/
