const gulp = require('gulp');
const config = require('../config').dev;
const plugins = require('gulp-load-plugins')();

function js() {
  return gulp.src(config.js)
    .pipe(gulp.dest(config.dest));
}

const dev = gulp.parallel(js);
module.exports = dev;
