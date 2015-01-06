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
    name: 'deploy',
    description: 'Deploy dest directory to gh-pages branch',
    list: [
    'build',
    'gh-pages'
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
