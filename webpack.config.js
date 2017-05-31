const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: ['react-hot-loader/patch', 'webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server', APP_DIR + '/index.js'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  context: APP_DIR,
  devtool: 'inline-source-map',
  module:{
    rules: [{
     test: /\.(js|jsx)$/,
     use: [
          'babel-loader'
     ],
     exclude: /node_modules/
   }]
 },
 plugins: [
   new webpack.HotModuleReplacementPlugin(),
   new webpack.NamedModulesPlugin()
   /*
   new CleanWebpackPlugin(['public/dist'], {
     root: __dirname,
     verbose: true,
     exclude:['index.html']
   })
   */
   // prints more readable module names in the browser console on HMR updates

 ],
 devServer: {
   contentBase: BUILD_DIR,
   publicPath: '/',
   historyApiFallback: true,
    // respond to 404s with index.html

    hot: true,
    // enable HMR on the server
 }
};

module.exports = config;
