// lista de dependências
const { src, dest, watch, series } = require("gulp");
const less = require("gulp-less");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");

// Criando Funções
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

// Execução do gulp
exports.css = css;
exports.dev = dev;
exports.default = series(css);
