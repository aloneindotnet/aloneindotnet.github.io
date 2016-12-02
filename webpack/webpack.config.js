var path = require('path');
var webpack = require('webpack');

var env = 'dev'

var config = {
    entry: [
		"./src/input.js",
		"./src/testCustomLoader.json"
	],
	resolve: {
		root: [
			path.resolve('./src'),
		]
	},
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname, "src"),
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.json$/,
				include: path.join(__dirname, "src"),
				loader: './myLoader!json-loader'
			}
		]
	},
	plugins: []
}

if (env === 'prod') {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin())
} else {
    config.devtool = "#cheap-module-source-map"
    config.devServer = {
        contentBase: __dirname,
        hot: true,
        inline: true,
        host: "localhost",
        port: 8080
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );
}

module.exports = config;