const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack/hot/only-dev-server');
  }

  return sources;
}

module.exports = {
  entry: {
   bundle: getEntrySources([
     './src/index.jsx'
     ]),
  },
  output: {
    filename: 'public/[name].js',
  },
devtool: "source-map",
module: {
  loaders: [
  {
    test:/\.(js|jsx)$/,
    loaders: ['react-hot-loader', 'jsx-loader', 'babel-loader',],
    exclude: /node_modules/,
  },
  {
    test:/\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
  },
  {
   test:/\.scss$/,
   loaders: ExtractTextPlugin.extract('css-loader!sass-loader')
  }
  ], 
},
   plugins: [
   new ExtractTextPlugin({
     allChunks: true,
     filename: 'public/styles.css'
   })
   ]
 }
