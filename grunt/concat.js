module.exports = {
  app: {
    options: {
      banner: '/* @flow */\n',
    },
    src: [
      'src/js/app.js',
      'src/js/util/*.js',
      'src/js/model/*.js',
      'src/js/controller/*.js',
      'src/js/router.js',
      'src/js/launcher.js'
    ],
    dest: 'dest/js/app.js',
  }
};
