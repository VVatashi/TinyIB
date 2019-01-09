const path = require('path');

module.exports = {
  entry: './ts/mobile.ts',
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }],
  },
  externals: {
    'axios': 'axios',
    'luxon': 'luxon',
    'vue': 'Vue',
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  output: {
    filename: './mobile.js',
    path: path.resolve(__dirname, 'webroot/js')
  }
};
