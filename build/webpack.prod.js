const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
const Plugin = require('../plugin/index.js')

module.exports = {
  mode: 'production',
  entry: {
    index: './pages/index.js',
    docs: './pages/docs.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'react',
          entry: 'https://cdn.bootcss.com/react/16.10.2/umd/react.production.min.js',
          global: 'React'
        },
        {
          module: 'react-dom',
          entry: 'https://cdn.bootcss.com/react-dom/16.10.2/umd/react-dom.production.min.js',
          global: 'ReactDOM'
        }
      ]
    }),
    new Plugin({
      dirname: 'docs'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                // '@babel/preset-env',
                '@babel/preset-react'],
              plugins: ['@babel/syntax-dynamic-import']
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: path.resolve('loader/mdloader.js')
          }
        ]
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'async'
    }
  }
}