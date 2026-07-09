const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

// 1. Copia o HTML da Raiz para a pasta Dist
function tarefasHtml() {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./dist'));
}

// 2. Compila e comprime o CSS
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

// 3. Copia as imagens sem compressão para evitar erros de versão
function images() {
    return gulp.src('./src/images/**/*')
        .pipe(gulp.dest('./dist/images'));
}

// 4. Comprime os scripts JavaScript
function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

// Executa todas as 4 tarefas em paralelo quando você roda o build
exports.default = gulp.parallel(styles, images, scripts, tarefasHtml);
