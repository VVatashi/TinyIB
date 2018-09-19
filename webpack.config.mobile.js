const path = require('path');

module.exports = {
  entry: './ts/mobile.ts',
  mode: 'production',
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }],
  },
  externals: {
    luxon: 'luxon',
  },
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    filename: './mobile.js',
    path: path.resolve(__dirname, 'webroot/js')
  }
};
