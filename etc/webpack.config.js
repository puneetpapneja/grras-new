// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv-webpack');
const webpackBar = require('webpackbar');
const CompressionPlugin = require('compression-webpack-plugin');

const relative = (target) => path.resolve(__dirname, '..', target);
const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

  
const config = {
  entry: relative("src/index.js"),
  output: {
    path: relative("dist"),
    publicPath: '/',
    clean: true
  },
  devtool: isProduction ? false : 'eval',
  devServer: {
    port: "3000",
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  plugins: [  
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new dotenv({
      path: './.env', // load this now instead of the ones in '.env'
      //safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: true, // hide any errors
      defaults: false // load '.env.defaults' as the default values if empty.
      //prefix: 'import.meta.env.', // reference your env variables as 'import.meta.env.ENV_VAR'.
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '..', 'src', 'favicon.ico'),
          to: path.resolve(__dirname, '..', 'dist')
        },
        {
          from: path.resolve(__dirname, '..', 'src', 'assets'),
          to: path.resolve(__dirname, '..', 'dist','assets')
        }
      ]
    }),  
    new webpackBar(),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
    })
   
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: "/node_modules/",
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "postcss-loader", "sass-loader"],
      },
      // {
      //   test: /\.css$/i,
      //   use: [stylesHandler, "css-loader"],
      // },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({ parallel: true, minify: CssMinimizerPlugin.cleanCssMinify }),
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          parse: {
            // We want terser to parse ecma 8 code. However, we don't want it
            // to apply any minification steps that turns valid ecma 5 code
            // into invalid ecma 5 code. This is why the 'compress' and 'output'
            // sections only apply transformations that are ecma 5 safe
            // https://github.com/facebook/create-react-app/pull/4234
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: false,
            // Disabled because of an issue with Uglify breaking seemingly valid code:
            // https://github.com/facebook/create-react-app/issues/2376
            // Pending further investigation:
            // https://github.com/mishoo/UglifyJS2/issues/2011
            comparisons: false,
            // Disabled because of an issue with Terser breaking valid code:
            // https://github.com/facebook/create-react-app/issues/5250
            // Pending further investigation:
            // https://github.com/terser-js/terser/issues/120
            inline: 2
          },
          mangle: {
            safari10: true
          },
          // Added for profiling in devtools
          keep_classnames: true,
          keep_fnames: true,
          output: {
            ecma: 5,
            comments: false,
            // Turned on because emoji and regex is not minified properly using default
            // https://github.com/facebook/create-react-app/issues/2488
            ascii_only: true
          }
        }
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        inject: true,
        template: relative('src/index.html'),
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          // This causes problems with injected manifest.js
          // minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
      }),
      // new UglifyJsPlugin({
      //   uglifyOptions: {
      //     output: {
      //       comments: false
      //     }
      //   }
      // })
    ]
  },
  resolve: {
    /** "extensions"
     * If multiple files share the same name but have different extensions, webpack will
     * resolve the one with the extension listed first in the array and skip the rest.
     * This is what enables users to leave off the extension when importing
     */
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      components: relative('src/components'),
      services: relative('src/services'),
      utils: relative('src/utils'),
      pages: relative('src/pages'),
      assets: relative('src/assets'),      
      store: relative('src/store'),
      routes: relative('src/routes'),
      mocks: relative('src/mocks'),
      hooks: relative('src/hooks'),
      service: relative('src/service'),
    },
    modules: ['node_modules']
  }
};

module.exports = () => {  
  if (isProduction) {
    config.mode = "production";
    config.plugins.push(new MiniCssExtractPlugin());
    config.performance = {
      maxAssetSize: 5000000,
      maxEntrypointSize: 5000000
    }   
  } else {
    config.mode = "development";    
  }

  return config;
};
