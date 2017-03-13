function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack/hot/only-dev-server');
  }

  return sources;
}

module.exports = {
  entry: {
    bundle: getEntrySources([
      './src/index.js'
    ]),
  },
  output: {
    filename: 'public/[name].js',
  },
  module: {
    loaders: [
      {
        test:/\.js$/,
        loaders: ['react-hot-loader', 'jsx-loader', 'babel-loader',],
        exclude: /node_modules/,
      },
      {
        test:/\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
}
