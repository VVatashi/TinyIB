const merge = require('webpack-merge');

const common = require('./mobile.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
});