var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
	entry: {
		app: path.resolve(__dirname, 'app/main.js'),
		mobile: path.resolve(__dirname, 'app/mobile.js'),
		vendors: ['react']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: [node_modules_dir],
			loader: 'babel'
		}, {
				test: /\.css$/,
				loader: 'style!css'
			}, {
				test: /\.s(a|c)ss$/,
				loader: 'style!css!sass',
			}, {
				test: /\.less$/,
				loader: 'style!css!less',
			}, {
				test: /\.(png|jpg)$/,
				loader: 'url?limit=25000',
			}, {
				test: /\.woff$/,
				loader: 'url?limit=100000'
			}]
	},
	plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
};

module.exports = config;