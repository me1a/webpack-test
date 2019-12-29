
const RawSource = require('webpack-sources').RawSource;
const path = require('path')

module.exports = class MarkdownToHtmlPlugin {
  constructor(option) {
    this.option = option
  }
  apply(compiler) {

    let arr = []
    compiler.hooks.afterCompile.tap('MarkdownToHtmlPlugin', (compilation) => {
      compilation.modules.forEach(item => {
        if (item.resource && item.resource.includes('/docs/')) {
          console.log(item.resource)
          // console.log(item._source.source())
          arr.push({
            filename: item.resource.replace('.md', '.html'),
            content: JSON.parse(item._source.source().slice(15))
          })
        }
      })
    })
    compiler.hooks.emit.tap('MarkdownToHtmlPlugin', compilation => {

      arr.forEach(item => {
        console.log(item.filename)
        console.log(compilation.options.output.path)
        console.log('-------')
        const outputRelativePath = path.relative(
          compilation.options.output.path,
          item.filename
        )
        console.log(item.content)
        console.log(outputRelativePath)
        compilation.assets[outputRelativePath] = new RawSource(item.content.markdown)
      })


    })
  }
}