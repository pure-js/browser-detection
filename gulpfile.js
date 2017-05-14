const del = require('del'),
  config = require('./gulp/config'),
  dev = require('./gulp/tasks/dev'),
  build = require('./gulp/tasks/build');

const clean = () => del([config.dev.dest, config.build.dest]);

exports.clean = clean;
exports.build = build;
exports.dev = dev;
// The default task (called when you run `gulp` from cli)
exports.default = dev;
