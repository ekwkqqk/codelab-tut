var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  output : {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },

  devServer: {
      hot: true,
      inline: true,
      host: '127.0.0.1',
      port: 4000,
      contentBase: __dirname + '/public/',
  },

  module: {
      loaders: [
          {
            test: /\.js$/,
            loader: ['react-hot-loader','babel-loader?'+JSON.stringify({              
                  cacheDirectory: true,
                  presets:['es2015', 'react']
            })],
            exclude: /node_modules/,

          }
      ]
  },

  plugins: [
      new webpack.HotModuleReplacementPlugin()
  ]
};
