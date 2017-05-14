const gulp = require('gulp'),
  config = require('../config').dev,
  plugins = require('gulp-load-plugins')();

const dev = gulp.parallel(html, css, copy, watch);

function html() {
  return gulp.src(config.pug)
    .pipe(plugins.pug({
      pretty: true
    }))
    .pipe(gulp.dest(config.dest));
}

function css() {
  return gulp.src(config.paths.styl)
    .pipe(plugins.stylus({
      'include css': true
    }))
    .pipe(gulp.dest(config.dest));
}

function copy() {
  return gulp.src(config.paths.copy)
    .pipe(gulp.dest(config.dest));
}

function watch() {
  gulp.watch(config.pugWatch, html);
  gulp.watch(config.stylusWatch, css);
}

module.exports = dev;
