const gulp = require('gulp');
const config = require('../config').build;
const plugins = require('gulp-load-plugins')();

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
      'compress': true,
      'include css': true,
    }))
    .pipe(plugins.cleanCss({
      level: 2,
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

const build = gulp.parallel(html, css, js, copy);
module.exports = build;
