module.exports = {
  options: {
    browsers: 'last 2 version'
  },
  file: {
    flatten: true,
    expand: true,
    src: 'dest/css/*.css',
    dest: 'dest/css/'
  }
};
