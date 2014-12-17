module.exports = function(grunt) {
  'use strict';
  var config, tasks, usage;

  config = require('./config');
  tasks = require('./tasks');
  usage = require('./usage');

  grunt.config.init(config);

  tasks.forEach(function (task) {
    grunt.registerTask(task.name, task.description, task.list);
    usage.add(task.name, task.description);
  });

  grunt.registerTask(
    'default',
    'Display all grunt tasks',
    function () { usage.log(grunt); }
  );

  require('load-grunt-tasks')(grunt);
};
