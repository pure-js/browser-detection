const gulp = require('gulp'),
  del = require('del'),
  config = require('./gulp/config'),
  tasks = require('./gulp/tasks'),
  plugins = require('gulp-load-plugins')();

gulp.task('build', tasks.build);

const clean = () => del([config.paths.build]);

exports.clean = clean;

function watch() {
  gulp.watch(config.paths.stylusWatch, tasks.build);
  gulp.watch(config.paths.pugWatch, tasks.build);
}

// gulp.task('deploy', () =>
//   gulp.src(paths.dist + '**/*')
//     .pipe(plugins.ghPages())
// );

// The default task (called when you run `gulp` from cli)
const dev = gulp.parallel(tasks.build, watch);
gulp.task('dev', dev);
gulp.task('default', dev);
