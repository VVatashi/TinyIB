const merge = require('webpack-merge');

const common = require('./app.common.js');

module.exports = merge(common, {
  mode: 'production',
});
