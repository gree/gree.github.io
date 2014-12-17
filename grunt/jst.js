module.exports = {
  compile: {
    options: {
      processName: function (filename) {
        var name = filename
          .replace('src/jst/', '')
          .replace('.jst.html', '');

        return name;
      }
    },
    files: {
      'dest/js/jst.js': ['src/jst/*.html']
    }
  }
};
