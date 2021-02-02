// @ts-check
/* eslint-disable tsdoc/syntax, @typescript-eslint/no-require-imports, import/no-commonjs, @typescript-eslint/no-var-requires */
let ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
let HtmlWebpackPlugin = require("html-webpack-plugin")
let webpack = require("webpack")

/**
 * @typedef {import("webpack").Configuration} Configuration
 * @typedef {import("webpack").WebpackOptionsNormalized} WebpackOptionsNormalized
 * @typedef {Pick<WebpackOptionsNormalized, "devServer">} AdditionalConfiguration
 */

/**
 * @type {Configuration & AdditionalConfiguration}
 */
let config = {
	mode: process.env.NODE_ENV === "development" ? "development" : "production",
	devtool: "cheap-module-source-map",
	entry: "./src/index.tsx",
	output: {
		filename: "dist/bundle.js",
		pathinfo: true,
	},
	resolve: {
		// These are the reasonable defaults supported by the Node ecosystem.
		extensions: [".js", ".ts", ".tsx"],
	},
	devServer: {
		hot: true,
		port: 1234,
		contentBase: "./src/public",
	},
	performance: {
		hints: "warning",
	},
	experiments: {
		lazyCompilation: true,
	},
	module: {
		strictExportPresence: true,
		rules: [
			// Disable require.ensure as it's not a standard language feature.
			// { parser: { requireEnsure: false } },
			{
				oneOf: [
					{
						test: /\.(js|ts|tsx)$/,
						exclude: /node_modules/,
						loader: "babel-loader",
						options: {
							// This is a feature of `babel-loader` for webpack (not Babel itself).
							// It enables caching results in ./node_modules/.cache/babel-loader/
							// directory for faster rebuilds.
							cacheDirectory: true,
							// See #6846 for context on why cacheCompression is disabled
							cacheCompression: false,
						},
					},
					{
						test: /\.css$/,
						use: ["style-loader", "css-loader"],
						sideEffects: true,
					},
					{
						loader: "file-loader",
						// Exclude `js` files to keep "css" loader working as it injects
						// its runtime that would otherwise be processed through "file" loader.
						// Also exclude `html` and `json` extensions so they get processed
						// by webpacks internal loaders.
						exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
						options: {
							name: "dist/[name].[hash:8].[ext]",
						},
					},
				],
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			// eslint-disable-next-line @typescript-eslint/naming-convention
			"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
		}),
		...(process.env.NODE_ENV === "development"
			? [new ReactRefreshWebpackPlugin()]
			: []),
		new HtmlWebpackPlugin({
			template: "./src/index.template.html",
		}),
	],
}

module.exports = config
