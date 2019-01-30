const path = require('path');
const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin;

module.exports = {
  entry: './ts/app.ts',
  mode: 'development',
  devtool: 'inline-source-map',
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
    extensions: ['.js', '.ts'],
  },
  output: {
    filename: './index.js',
    path: path.resolve(__dirname, 'webroot/js')
  }
};
