module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'public/bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: {
        loader: 'babel-loader',
        },
      },
    ],
  },
};
