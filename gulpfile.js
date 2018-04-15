'use strict';

var gulp = require('gulp');
var ts = require("gulp-typescript");
var sass = require('gulp-sass');

var tsProject = ts.createProject("tsconfig.json");

gulp.task('ts', function () {
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest('./js'));
});

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass({
        outputStyle: 'compressed',
      })
      .on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', [
  'ts',
  'sass',
]);

gulp.task('ts:watch', function () {
  gulp.watch('./ts/**/*', ['ts']);
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*', ['sass']);
});

gulp.task('watch', [
  'ts:watch',
  'sass:watch',
]);
