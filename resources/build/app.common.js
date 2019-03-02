const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './resources/ts/app.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  externals: {
    'axios': 'axios',
    'luxon': 'luxon',
    'vue': 'Vue',
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue'],
  },
  output: {
    filename: './js/index.js',
    path: path.resolve(__dirname, '../../webroot')
  }
};
