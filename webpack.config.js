const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/browser/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    compress: true,
    port: 8080
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {
      COMPONENTS: path.resolve(__dirname, 'src/browser/components/'),
      CONSTANTS: path.resolve(__dirname, 'src/browser/constants/'),
      LAYOUT: path.resolve(__dirname, 'src/browser/layout/'),
      MISC: path.resolve(__dirname, 'src/browser/misc/'),
      ROUTES: path.resolve(__dirname, 'src/browser/routes/'),
      PAGES: path.resolve(__dirname, 'src/browser/pages/')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
            plugins: ['transform-class-properties']
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}