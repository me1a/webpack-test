module.exports = class Plugin {
  constructor() { }
  apply(compiler) {
    compiler.plugin('emit', (compilation, callback) => {
      compilation.assets['adf.jsf'] = {
        source: function () {
          return '342342342'
        },
        size: function () {
          return `342342342`.length
        }
      }
      callback()
    })
  }
}