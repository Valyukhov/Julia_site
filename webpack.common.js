const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: { app: './src/js/index.js' },
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      url: require.resolve('url/'),
      os: require.resolve('os-browserify/browser'),
      assert: require.resolve('assert/'),
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer/'),
    },
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   Buffer: ['buffer', 'Buffer'],
    //   process: 'process/browser',
    // }),
    
    new CopyPlugin({
      patterns: [
        { from: 'src/img', to: 'img' },
        
        // { from: 'src/fonts', to: 'fonts' },
        // { from: 'src/favicon', to: '' },
        
      ],
    }),
    new HtmlWebpackPlugin({
      chunks: ['app'],
      template: 'src/index.hbs',
    }),    
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.hbs$/,
        use: [
          {
            loader: 'handlebars-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
            },
          },
          {
            loader: 'css-loader',
            options: {
              url: false,

              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
};
