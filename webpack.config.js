//entry -> output
const path = require('path')


module.exports = {
  entry: ['react-dates/initialize',
  'react-dates/lib/css/_datepicker.css', './src/app.js'],
  output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'

  },
  module:{
    rules: [
      {
        loader: 'babel-loader',
        test:/\.js$/,
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'

        ]
      }
    ]
    
  },
  devtool:'cheap-module-eval-source-map',
  devServer:{
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  } 
}