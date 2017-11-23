const gulp = require('gulp'),
  config = require('../config').build,
  plugins = require('gulp-load-plugins')();

const build = gulp.parallel(html, css, js, copy);

function html() {
  return gulp.src(config.pug)
    .pipe(plugins.pug({
      compileDebug: false,
      pretty: false,
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

module.exports = build;
