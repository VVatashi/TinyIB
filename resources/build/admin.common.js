const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './resources/ts/admin.ts',
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
    'vue': 'Vue',
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue'],
  },
  output: {
    filename: './js/admin.js',
    path: path.resolve(__dirname, '../../webroot')
  }
};
