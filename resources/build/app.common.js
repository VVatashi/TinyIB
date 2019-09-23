const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './resources/ts/app.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
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
    'katex': 'katex',
    'react': 'React',
    'react-dom': 'ReactDOM',
    'vue': 'Vue',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
  },
  output: {
    filename: './js/index.js',
    path: path.resolve(__dirname, '../../webroot')
  }
};
