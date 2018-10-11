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
    historyApiFallback: true,
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
      LAYOUTS: path.resolve(__dirname, 'src/browser/layouts/'),
      MISC: path.resolve(__dirname, 'src/browser/misc/'),
      ROUTES: path.resolve(__dirname, 'src/browser/routes/'),
      PAGES: path.resolve(__dirname, 'src/browser/pages/'),
      ICONS: path.resolve(__dirname, 'src/browser/icons/'),
      HOCS: path.resolve(__dirname, 'src/browser/hocs/')
    }
  },
  module: {
    rules: [
      /*  This is to avoid error:
      **  `ReferenceError: require is not defined`
      **  See thread here: https://github.com/aws-amplify/amplify-js/issues/686#issuecomment-387710340
       */
			{
				test: /\.mjs$/,
				include: /node_modules/,
				type: "javascript/auto",
			},
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
