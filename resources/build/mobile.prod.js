const merge = require('webpack-merge');

const common = require('./mobile.common.js');

module.exports = merge(common, {
  mode: 'production',
});
