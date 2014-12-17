module.exports = {
  production: {
    options: {
      compress: true
    },
    files: {
      "dest/css/style.min.css": "src/less/*.less"
    }
  },
  development: {
    options: {
    },
    files: {
      "dest/css/style.css": "src/less/*.less"
    }
  }
};
