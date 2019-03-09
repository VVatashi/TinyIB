const path = require('path');

module.exports = {
  entry: './resources/ts/mobile.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
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
    filename: './js/mobile.js',
    path: path.resolve(__dirname, '../../webroot')
  }
};
