const gulp = require('gulp'),
  del = require('del'),
  // config = require('./gulp/config'),
  tasks = require('./gulp/tasks'),
  plugins = require('gulp-load-plugins')();

gulp.task('build', tasks.build);

const clean = () => del(['build']);

exports.clean = clean;

// gulp.task('deploy', () =>
//   gulp.src(paths.dist + '**/*')
//     .pipe(plugins.ghPages())
// );

// The default task (called when you run `gulp` from cli)
gulp.task('default', tasks.build);
