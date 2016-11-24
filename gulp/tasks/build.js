const gulp = require('gulp'),
  config = require('../config'),
  plugins = require('gulp-load-plugins')();

const build = gulp.parallel(html, css, copy);

module.exports = build;

function html() {
  return gulp.src(config.paths.pug)
    .pipe(plugins.pug({
      pretty: true
    }))
    .pipe(gulp.dest(config.paths.build));
}

function css() {
  return gulp.src(config.paths.styl)
    .pipe(plugins.stylus({
      'include css': true
    }))
    .pipe(gulp.dest(config.paths.build));
}

function copy() {
  return gulp.src(config.paths.copy)
    .pipe(gulp.dest(config.paths.build));
}
