const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin")



module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },{
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                        }
                    }
                ]
            },{
                test: /\.(html)$/,
                use: 'html-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader',
            },
            {
                test: /\.(jpg|gif|svg)$/,
                loader: 'image-webpack-loader',
                enforce: 'pre',
                query: {
                    mozjpeg: {
                      progressive: true,
                    },
                    gifsicle: {
                      interlaced: false,
                    },
                    optipng: {
                      optimizationLevel: 4,
                    },
                    pngquant: {
                      quality: '75-90',
                      speed: 3,
                    }
                }
              }
            
        ]
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].js.map',
            exclude: ['vendor.js']
          }),
        new CompressionPlugin({
            test: /\.js/
        }),

        new UglifyJsPlugin({
            test: /\.js($|\?)/i
        }),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        ],
        devServer: {
            port: 9090,
            contentBase: './dist'
        },

  };