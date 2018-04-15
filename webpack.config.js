const path = require('path');

module.exports = {
  entry: './ts/index.ts',
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
    filename: './index.js',
    path: path.resolve(__dirname, 'js')
  }
};
