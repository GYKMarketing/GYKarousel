const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PACKAGE = require('./package.json');

module.exports = {
	name: 'gykarousel',
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'gykarousel.js',
		libraryTarget: 'var',
		library: 'GYKarousel'
	},
	optimization: {
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
			filename: "gykarousel.css",
		}),
		new HtmlWebpackPlugin({
	      template: 'index.html',
	      version: ''
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