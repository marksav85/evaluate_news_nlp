const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const WorkboxPlugin = require('workbox-webpack-plugin');



module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    /*devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
          context: () => true,
          target: 'http://localhost:8090',
          secure: false
        }
    },*/
    output: {
        libraryTarget: 'var',
        library: 'Client',
        clean: true, // Clean the output directory before emit.
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html"
        }),
        new WorkboxPlugin.GenerateSW()
    ]
}
