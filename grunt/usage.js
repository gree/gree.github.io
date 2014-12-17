var usage = '';
usage = 'Grunt tasks:\n';
usage += '  grunt:  ';
usage += 'Display this message\n';

module.exports.add = function (name, description) {
  'use strict';
  usage += '  ';
  usage += 'grunt ' + name;
  usage += ':  ';
  usage += description;
  usage += '\n';
};

module.exports.log = function (grunt) {
  'use strict';
  grunt.log.ok(usage);
};
