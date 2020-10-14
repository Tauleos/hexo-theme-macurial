var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

function gulpScss() {
    return gulp.src('./source/scss/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./source/css'));
}
// 一次性编译 Sass 
gulp.task('sass',gulpScss);
// exports.sass = sass;
exports.default=function() {
    console.log('aaa default');
    gulp.watch(['./source/scss/_partial/*.scss','./source/scss/*.scss'],gulpScss);
};
