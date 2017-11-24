const del = require('del');
const config = require('./gulp/config');
const dev = require('./gulp/tasks/dev');
const build = require('./gulp/tasks/build');

const clean = () => del([config.dev.dest, config.build.dest]);

exports.clean = clean;
exports.build = build;
exports.dev = dev;
// The default task, called when you run gulp
exports.default = dev;
