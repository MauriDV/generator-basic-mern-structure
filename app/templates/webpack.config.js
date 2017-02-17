const webpack = require('webpack');
module.exports={
  entry: './client/main.js',
  output:{
    path:'public',
    filename:'[name].js'
  },
  module:{
    loaders:[
      {
        test:/.jsx?$/,
        exclude:/node_modules/,
        loader:'babel-loader',
        query:{
          presets:['es2015','react']
        }
      }
    ]
  }
};
