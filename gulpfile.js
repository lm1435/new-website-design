var gulp = require('gulp');
var jshint = require('gulp-jshint'),
  cssmin = require('gulp-cssmin'),
  sitemap = require('gulp-sitemap'),
  uncss = require('gulp-uncss'),
  autoprefixer = require('gulp-autoprefixer');

gulp.task('autoprefix', function() {
  gulp.src('css/styles.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      casade: false
    }))
    .pipe(gulp.dest('css/prefixed.css'));
});

gulp.task('sitemap', function() {
  gulp.src('*.html', {
    read: false
  })
  .pipe(sitemap({
    siteUrl:'http://luismeza.io'
  }))
  .pipe(gulp.dest("./"));
});

gulp.task('uncss', function(){
  return gulp.src('css/styles.css')
  .pipe(uncss ({
    html: ['index.html', 'thanks.html']
  }))
  .pipe(gulp.dest("./uncss/"));
});


gulp.task('default', function(){
  gulp.src('css/styles.css')
    .pipe(cssmin())
    .pipe(gulp.dest('styles.min.css'));
  return gulp.src("js/**/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
