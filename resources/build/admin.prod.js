const merge = require('webpack-merge');

const common = require('./admin.common.js');

module.exports = merge(common, {
  mode: 'production',
});
