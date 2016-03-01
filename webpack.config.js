var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Clean = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: [
      './source/assets/stylesheets/index.scss',
      './source/assets/javascripts/index.js'
    ],
    head: './source/assets/javascripts/head.js'
  },

  resolve: {
    root: __dirname + '/source/assets/javascripts',
  },

  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'assets/javascripts/[name].bundle.js',
  },

  module: {
    loaders: [
      {
        test: /source\/assets\/javascripts\/.*\.js$/,
        exclude: /node_modules|\.tmp|vendor/,
        loader: 'babel-loader',
        query: {
          // cacheDirectory: true,
          // presets: ['es2015', 'stage-0', 'babel-preset-react', 'react']
          presets: ['es2015', 'stage-0']
        },
      },

      { test: require.resolve("jquery"), loader: "expose?$" },

      {
        test: /[\\\/]vendor[\\\/]modernizr\.js$/,
        loader: "imports?this=>window!exports?window.Modernizr"
      },

      // Load SCSS
      {
        test: /.*\.scss$/,
        loader: ExtractTextPlugin.extract(
          "style",
          "css!sass?sourceMap&includePaths[]=" + __dirname + "/node_modules"
        )
      },

      // Load plain-ol' vanilla CSS
      { test: /\.css$/, loader: "style!css" },
    ],
  },

  node: {
    console: true
  },

  plugins: [
    new Clean(['.tmp']),
    new ExtractTextPlugin("assets/stylesheets/index.bundle.css"),
    new webpack.optimize.CommonsChunkPlugin("head", "assets/javascripts/head.bundle.js"),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
  ],
};
