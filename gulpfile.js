const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

// Tarefa de compilação e minificação do SASS
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError)) // Evita travar o watch em caso de erro de sintaxe
        .pipe(gulp.dest('./dist/css'));
}

// Tarefa de minificação de JavaScript (scripts do site e abas)
function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

// Tarefa de otimização de imagens (Layout Bazinga+)
async function images() {
    // Importação dinâmica necessária para versões modernas do gulp-imagemin
    const imagemin = (await import('gulp-imagemin')).default;
    
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// Exportação das tarefas principais
exports.default = gulp.parallel(styles, images, scripts);

// Monitorador de arquivos em tempo real (Watch)
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
    gulp.watch('./src/images/**/*', gulp.parallel(images)); // Adicionado para monitorar novas imagens da série
}