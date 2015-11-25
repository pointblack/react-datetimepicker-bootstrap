var babel = require("babel-core");

module.exports = {
  process: function (src, filename) {
    // Ignore all files within node_modules
    // babel files can be .js, .es, .jsx or .es6
    if (filename.indexOf("node_modules") === -1 && babel.util.canCompile(filename)) {
      return babel.transform(src, {
        filename: filename,
        presets: ['react', 'es2015', 'stage-0'],
        retainLines: true
      }).code;
    }

    return src;
  }
};
