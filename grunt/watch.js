module.exports = {
  index: {
    options: {
      livereload: true,
      hostname: 'localhost',
      port: 5455
    },
    files: ['src/index.html'],
    tasks: ['htmlmin:index'],
  },
  jst: {
    options: {
      livereload: true,
      hostname: 'localhost',
      port: 5455
    },
    files: ['src/jst/*.html'],
    tasks: ['jst', 'uglify:jst'],
  },
  less: {
    options: {
      livereload: true,
      hostname: 'localhost',
      port: 5455
    },
    files: ['src/less/*.less'],
    tasks: ['less'],
  },
  app: {
    options: {
      livereload: true,
      hostname: 'localhost',
      port: 5455
    },
    files: ['src/js/**/*.js'],
    tasks: ['concat:app', 'jshint:app', 'uglify:app'],
  }
};
