module.exports = [
  {
    name: 'build',
    description: 'Build all assets files',
    list: [
    'htmlmin',
    'less',
    'jst',
    'rejs',
    'jshint',
    'uglify',
    'autoprefixer'
    ]
  }, {
    name: 'develop',
    description: 'Build all assets files and Launch connect server',
    list: [
    'build',
    'connect',
    'open',
    'watch'
    ]
  }
];
