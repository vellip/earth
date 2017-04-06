import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';

const dev = JSON.parse(process.env.BUILD_DEV || 'false');


module.exports = {

  entry: {
    all: [
      './earth_django/static/scss/style.scss',
      './earth_django/static/js/app.js',
    ],
  },

  output: {
    path: `${__dirname}/earth_django/static/`,
    publicPath: '/static/',
    filename: '[name].js',
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' }),
      },
      {
        test: /\.(woff2?|ttf|eot|svg|jpg|png|gif|swf)(\?.*)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react'],
          plugins: [
            'syntax-object-rest-spread',
            'transform-object-rest-spread',
          ],
        },
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  plugins: [
    new webpack.DefinePlugin({
      dev: JSON.stringify(dev),
      'process.env.NODE_ENV': dev ? '"development"' : '"production"',
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /cs/),
    new ExtractTextPlugin('[name].css'),
  ],

};
