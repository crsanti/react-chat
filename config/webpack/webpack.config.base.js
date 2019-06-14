const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const WebappWebpackPlugin = require('webapp-webpack-plugin');
const { resolveFromRootPath } = require('../helpers');

module.exports = merge(common, {
  context: resolveFromRootPath('src'),
  entry: {
    app: './index.tsx',
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new WebappWebpackPlugin({
      logo: resolveFromRootPath('public', 'favicon', 'favicon.png'),
      emitStats: false,
      persistentCache: true,
      inject: true,
      background: '#fff',
      title: 'React Chat',
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolveFromRootPath('public', 'index.html'),
      hash: true,
      chunks: ['manifest', 'vendor', 'app'],
      chunksSortMode: 'manual',
    }),
    new ForkTsCheckerWebpackPlugin({
      tsconfig: resolveFromRootPath('tsconfig.json'),
      tslint: resolveFromRootPath('tslint.json'),
      watch: resolveFromRootPath('src'),
      async: false,
      workers: ForkTsCheckerWebpackPlugin.TWO_CPUS,
    }),
  ],
});
