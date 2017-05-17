const common = {
  pug: 'demo/index.pug',
}

const dev = {
  pug: common.pug,
  pugWatch: [
    'demo/index.pug'
  ],
  styl: [
    'src/styles/old-browser.styl'
  ],
  stylWatch: [
    'src/**/*.styl'
  ],
  js: [
    'src/*.js'
  ],
  copy: ['node_modules/prismjs/prism.js', 'node_modules/prismjs/themes/prism.css'],
  css: 'app.min.css',
  dest: '.tmp/'
};

// For the future
// dev.copy = dev.copyJs.concat(common.copy);

const build = {
  pug: common.pug,
  styl: [
    'src/styles/old-browser.styl'
  ],
  js: [
    'src/*.js'
  ],
  copy: ['bower_components/prism/prism.js', 'bower_components/prism/themes/prism.css'],
  css: 'app.min.css',
  dest: 'build/'
};

module.exports = { dev, build }
