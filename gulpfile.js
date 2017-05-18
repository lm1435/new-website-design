var gulp = require('gulp');
var jshint = require('gulp-jshint');
var cssmin = require('gulp-cssmin');
var sitemap = require('gulp-sitemap');

gulp.task('sitemap', function() {
  gulp.src('*.html', {
    read: false
  })
  .pipe(sitemap({
    siteUrl:'http://luismeza.io'
  }))
  .pipe(gulp.dest("./"));
});

gulp.task('default', function(){
  gulp.src('src/**/*.css')
    .pipe(cssmin())
    .pipe(gulp.dest('css/styles.min.css'));
  return gulp.src("js/**/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
