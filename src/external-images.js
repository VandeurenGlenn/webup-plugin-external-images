// TODO: include & exclude
/**
 * @param {object} options {cwd}
 */
const plugin = options => {
  if (!options) {
    options = {
      cwd: process.cwd()
    }
  }

  const map = new map();

  return {
    image: ({ path, contents }, options) => {
      if (!map.has(path)) {
        map.set(path, true);
        options.external.push(path);
      }
      return Promise.resolve({file: {path, contents}, options}); // or return file;
    }
  };
}
module.exports = plugin;
