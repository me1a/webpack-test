const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
const Plugin = require('../plugin/index.js')

module.exports = {
  mode: 'development',
  entry: {
    index: './pages/index.js',
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
          entry: 'https://cdn.bootcss.com/react/16.10.2/umd/react.development.js',
          global: 'React'
        },
        {
          module: 'react-dom',
          entry: 'https://cdn.bootcss.com/react-dom/16.10.2/umd/react-dom.development.js',
          global: 'ReactDOM'
        }
      ]
    }),
    new Plugin({ dirname: 'docs' })
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
                '@babel/preset-react']
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          'html-loader',
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
  devServer: {
    contentBase: './dist',
    host: '127.0.0.1',
    disableHostCheck: true,
    port: 8003,
    hot: true,
    open: false,
    overlay: true,
    stats: {
      colors: true,
      all: false,
      chunks: false,
      chunkGroups: true,
      timings: true,
      errors: true,
      errorDetails: true
    }
  },

}