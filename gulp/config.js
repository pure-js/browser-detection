module.exports = {
  paths: {
    pug: 'demo/index.pug',
    pugWatch: [
      'demo/index.pug',
    ],
    styl: [
      'stylesheets/old-browser.styl'
    ],
    stylWatch: [
      'src/blocks/**/*.styl'
    ],
    copy: ['bower_components/prism/prism.js', 'bower_components/prism/themes/prism.css', 'src/check-browser.js'],
    build: 'build/'
  },
  names: {
    css: 'app.min.css'
  }
};
