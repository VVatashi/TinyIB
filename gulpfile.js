'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass({
        outputStyle: 'compressed',
      })
      .on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', ['sass']);

gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*', ['sass']);
});

gulp.task('watch', ['sass:watch']);
