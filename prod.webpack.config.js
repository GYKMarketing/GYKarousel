const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const PACKAGE = require('./package.json');

module.exports = {
	name: 'gykarousel',
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'gykarousel.min.js',
		libraryTarget: 'var',
		library: 'GYKarousel'
	},
	optimization: {
		minimize: true,
		minimizer: [
			new OptimizeCSSAssetsPlugin({}),
			new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false
                    },
                    output: {
                        comments: false
                    }
                }
            })
		],
		splitChunks: {
			cacheGroups: {
				styles: {
					name: 'styles',
					test: /\.css$/,
					chunks: 'all',
					enforce: true
				}
			}
		}
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'gykarousel.min.css',
		}),
		new HtmlWebpackPlugin({
	      template: 'index.html',
	      filename: 'index.html',
	      version: '?v=' + PACKAGE.version
	    })
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
          			MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			}
		]
	}
};