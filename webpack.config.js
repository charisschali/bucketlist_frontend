const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  },
  resolve: {
    // modules: [
    //   path.join(__dirname, 'node_modules'),
    // ],
    extensions: ['.js']
  },
};
