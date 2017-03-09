var gulp = require('gulp');
var jshint = require('gulp-jshint');
var cssmin = require('gulp-cssmin');

gulp.task('default', function(){
  gulp.src('src/**/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('css/styles.min.css'));
  return gulp.src("js/**/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
