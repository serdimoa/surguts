const gulp = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');

gulp.task('connect', () => {
  connect.server({
    livereload: true,
    root: './',
    debug: true,
  });
});

gulp.task('sass', () => {
  gulp.src('./style/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./style/'))
    .pipe(connect.reload());
});

gulp.task('html', () => {
  gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('watchhtml', () => {
  gulp.watch('*.html', ['html']);
});

gulp.task('watch', () => {
  gulp.watch('./style/**/*.scss', ['sass']);
});

gulp.task('default', ['connect', 'watch', 'watchhtml']);
