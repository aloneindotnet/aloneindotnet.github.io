var path = require('path');

module.exports = {
    entry: [
		"./src/input.js"
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
			}
		]
	}
}