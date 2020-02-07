const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ROOT_DIR = path.resolve(__dirname);
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);
const SRC_DIR = resolvePath('src');
const DIST_DIR = resolvePath('dist');

module.exports = ({ mode }) => {
  const isDev = mode === 'development';
  return {
    mode,
    entry: {
      index: resolvePath(SRC_DIR, 'index.jsx'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: '網頁設計前後端程式教學機構 | 實戰轉職訓練 | 五倍紅寶石',
        filename: 'index.html',
        favicon: resolvePath(ROOT_DIR, 'static/favicon-16x16-5bb791a3.png'),
        chunks: ['index', 'vendor', 'commons', 'runtime'],
        template: resolvePath(ROOT_DIR, 'templates/index.html'),
        meta: {
          viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        },
        minify: {
          removeComments: true,
          collapseWhitespace: false,
        },
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],
    output: {
      filename: isDev ? '[name].js' : '[name].[chunkhash:8].js',
      chunkFilename: isDev ? '[name].chunk.js' : '[name].[chunkhash:8].chunk.js',
      path: DIST_DIR,
      publicPath: isDev ? '/' : './',
    },
    devServer: {
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: isDev,
              },
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(png|jpeg|jpg|gif|webp)$/,
          use: ['file-loader?name=assets/images/[name].[ext]'],
        },
        {
          test: /\.(woff|woff2|svg|eot|ttf|otf)$/,
          use: ['file-loader?name=assets/fonts/[name].[ext]'],
        },
        {
          test: /\.(ts|js)x?$/,
          exclude: /(node_modules|bower_components)/,
          include: [SRC_DIR],
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
              },
            },
            {
              loader: 'eslint-loader',
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.jsx', '.js', '.json'],
    },
    devtool: isDev ? 'cheap-module-inline-source-map' : 'source-map',
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            name: 'vendor',
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            chunks: 'all',
          },
          commons: {
            name: 'commons',
            chunks: 'initial',
            minChunks: 2,
          },
        },
      },
      runtimeChunk: {
        name: 'runtime',
      },
    },
  };
};
