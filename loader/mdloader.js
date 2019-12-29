
const loaderUtils = require("loader-utils");
const mdToObject = require('./md/index.js')

module.exports = function (markdown) {
  // merge params and default config
  const options = loaderUtils.getOptions(this);

  const v = mdToObject(markdown)

  return `export default ${JSON.stringify(v)}`


};