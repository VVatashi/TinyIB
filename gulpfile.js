'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');

const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('ts', function (done) {
  function onError(error) {
    done(new gutil.PluginError('webpack', error));
  }

  function onSuccess(info) {
    gutil.log('[webpack]', info);
    done();
  }

  webpack(webpackConfig, function (error, stats) {
    if (error) {
      onError(error);
    } else if (stats.hasErrors()) {
      onError(stats.toString({
        colors: true,
        reasons: true,
      }));
    } else {
      onSuccess(stats.toString({
        colors: true,
        reasons: true,
      }));
    }
  });
});

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass({
        outputStyle: 'compressed',
      })
      .on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false,
    }))
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
