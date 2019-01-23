// @flow

import merge from 'webpack-merge';
import path from 'path';

import common from './webpack.common.babel';

export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
  },
});
