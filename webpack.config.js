const path = require('path');

module.exports = {
  watch: true,
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  },
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'node',

  context: __dirname,

  entry: {
    a: './src/a.js',
    b: './src/b.js'
  },

  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    publicPath: 'dist',
    libraryTarget: "umd",
    devtoolModuleFilenameTemplate: "../[resource-path]"
  },

  module: {
    rules: [
      {
        loader: 'babel-loader',
        include: path.resolve('./src')
      }
    ]
  },

  optimization: {
    splitChunks: {
      // NOTE: we are currently not generating any common chunks, because
      // chunks: 'all',
      // name: false,
      cacheGroups: {
        shared: {
          name: '_shared',
          enforceSizeThreshold: 0,
          minChunks: 2,
          chunks: 'async',
          priority: 10,
          reuseExistingChunk: true,
          enforce: true
        }
      }
    }
  },
};