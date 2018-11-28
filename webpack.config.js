var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname, devtool: debug ? "inline-sourcemap" : null,
  entry: "./app/src/index.js",
  module: {
    rules: [ {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [ '@babel/preset-env', '@babel/react' ],
          plugins: [ [
            'react-html-attrs'
          ], [
            'transform-class-properties'
          ], [
            '@babel/plugin-proposal-decorators',
            { legacy: true }
          ] ]
        }
      } 
    } ]
  },
  output: {
    path: __dirname + "/app/dist/js/",
    filename: "index.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ]
};
