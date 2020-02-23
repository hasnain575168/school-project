const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({
  mode,
}) => ({
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.css',
      '.sass',
      '.less',
    ],
  },

  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: {
              modifyVars: {},
              javascriptEnabled: true,
            },
          },
        ],
      },
    ],
  },

  entry: {
    main: [
      '@babel/polyfill',
      './src/index.jsx',
    ],
  },

  output: {
    path: path.resolve('public', 'scripts'),
    filename: '[name].js',
  },

  mode,
});
