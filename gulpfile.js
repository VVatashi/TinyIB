'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');

const webpack = require('webpack');

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function webpackHandler(config, callback) {
  function onError(error) {
    callback(new gutil.PluginError('webpack', error));
  }

  function onSuccess(info) {
    gutil.log('[webpack]', info);
    callback();
  }

  function handler(error, stats) {
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
  }

  webpack(config, handler);
}

gulp.task('ts:index', function (callback) {
  const config = require('./webpack.config.js');
  return webpackHandler(config, callback);
});

gulp.task('ts:mobile', function (callback) {
  const config = require('./webpack.config.mobile.js');
  return webpackHandler(config, callback);
});

gulp.task('ts', [
  'ts:index',
  'ts:mobile',
]);

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
    .pipe(gulp.dest('./webroot/css'));
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
