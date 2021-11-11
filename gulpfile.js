const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const image = require('gulp-image');


// minify images
gulp.task('image', function() {
  return gulp.src('img/*')
    .pipe(image())
    .pipe(gulp.dest('dist'));
});


// compile SCSS to CSS
gulp.task('sass', function () {
  return gulp.src('*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('.'));
});


// minify CSS
gulp.task('css', function () {
  return gulp.src('*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist'));
});


// minify HTML
gulp.task('html', function () {
  return gulp.src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});


// run all gulp tasks
gulp.task('develop', gulp.series('image', 'sass', 'css', 'html'));