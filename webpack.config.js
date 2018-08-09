const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
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
      COMPONENTS: path.resolve(__dirname, 'src/components/'),
      CONSTANTS: path.resolve(__dirname, 'src/constants/'),
      LAYOUT: path.resolve(__dirname, 'src/layout/'),
      MISC: path.resolve(__dirname, 'src/misc/'),
      ROUTES: path.resolve(__dirname, 'src/routes/'),
      PAGES: path.resolve(__dirname, 'src/pages/')
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
            presets: ['es2015', 'react']
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