const webpack = require('webpack')
const path = require('path')

const webpackConfig = require('./webpack.prod.js')

webpack(webpackConfig, (err, stats) => {
  if (err) {
    console.error(err.stack || err)
    if (err.details) {
      console.error(err.details)
    }
    throw err
  }
  const info = stats.toJson()

  if (stats.hasErrors()) {
    console.error(info.errors)
    process.exit(1)
  }
  if (stats.hasWarnings()) {
    console.warn(info.warnings)
  }

  process.stdout.write(
    stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: true,
      chunkModules: false
    }) + '\n\n'
  )
  console.log('successs')
})
