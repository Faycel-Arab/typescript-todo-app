const path = require('path');

module.exports = {
  entry: {
    store: './spec/tests/store.test.ts'
  },
  mode: 'development',
  output: {
    filename: '[name].spec.js',
    path: path.resolve(__dirname, 'spec')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  }
};