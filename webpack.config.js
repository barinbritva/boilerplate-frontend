const path = require('path');
const {execSync} = require('child_process');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopmentEnv = process.env.NODE_ENV === 'development';
const isProductionEnv = !isDevelopmentEnv;
// process.env.APP_BUILD exists only in production build
const buildVersion =
	process.env.APP_BUILD ?? execSync('git rev-parse --short HEAD').toString().trim();

/** @type {import('webpack').Configuration} */
module.exports = {
	mode: isDevelopmentEnv ? 'development' : 'production',
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'scripts/index.js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							...(isDevelopmentEnv
								? {
										compilerOptions: {
											allowUnreachableCode: true,
											allowUnusedLabels: true,
											noUnusedLocals: false,
											noUnusedParameters: false,
											removeComments: false,
											sourceMap: true,
											preserveWatchOutput: true
										}
									}
								: {})
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: false,
			template: 'index.html',
			filename: 'index.html',
			// filename: `index${isProductionEnv ? `.${buildVersion}` : ''}.html`,
			templateParameters: {
				buildVersion: buildVersion
			}
		}),
		new MiniCssExtractPlugin({
			filename: 'styles/index.css'
		})
	],
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
			publicPath: '/'
		},
		historyApiFallback: true,
		allowedHosts: 'all',
		compress: true,
		port: 4005,
		hot: true,
		proxy: [
			{
				context: ['/api'],
				target: 'http://localhost:4001',
				changeOrigin: true
			}
		]
	},
	devtool: isDevelopmentEnv ? 'eval' : 'source-map'
	// watch: isDevelopmentEnv
};
