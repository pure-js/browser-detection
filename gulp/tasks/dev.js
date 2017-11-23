const gulp = require('gulp');
const config = require('../config').dev;
const plugins = require('gulp-load-plugins')();

function html() {
  return gulp.src(config.pug)
    .pipe(plugins.pug({
      compileDebug: true,
      pretty: true,
    }))
    .pipe(gulp.dest(config.dest));
}

function css() {
  return gulp.src(config.styl)
    .pipe(plugins.stylus({
      'include css': true,
    }))
    .pipe(gulp.dest(config.dest));
}

function js() {
  return gulp.src(config.js)
    .pipe(gulp.dest(config.dest));
}

function copy() {
  return gulp.src(config.copy)
    .pipe(gulp.dest(config.dest));
}

function watch() {
  gulp.watch(config.pugWatch, html);
  gulp.watch(config.stylusWatch, css);
  gulp.watch(config.js, js);
}

const dev = gulp.parallel(html, css, js, copy, watch);
module.exports = dev;
