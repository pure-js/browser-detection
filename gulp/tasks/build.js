const gulp = require('gulp');
const config = require('../config').build;
const plugins = require('gulp-load-plugins')();

function js() {
  return gulp.src(config.js)
    .pipe(gulp.dest(config.dest));
}

const build = gulp.parallel(js);
module.exports = build;
