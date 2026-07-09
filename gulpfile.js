const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

// Função que copia o HTML de 'src' para 'dist'
function tarefasHtml() {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
}

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

// Nova função de imagens: apenas copia, sem dar erro de 'imagemin'
function images() {
    return gulp.src('./src/images/**/*')
        .pipe(gulp.dest('./dist/images')); // Apenas move os arquivos salvando o build
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

// Executa todas as tarefas juntas de forma segura
exports.default = gulp.parallel(styles, images, scripts, tarefasHtml);
