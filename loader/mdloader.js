"use strict";

const marked = require("marked");
const loaderUtils = require("loader-utils");

module.exports = function (markdown) {
  // merge params and default config
  const options = loaderUtils.getOptions(this);

  this.cacheable();

  console.log()

  marked.setOptions(options);
  const res = marked(markdown)
  console.log(res)
  return res;
};