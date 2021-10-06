const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./app/main.css",

    module: {
        rules: [
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },

            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

            {
                test: /\.(js)$/,
                use: "babel-loader"
            }
        ]
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html'
        })
    ],

    mode: "production"
};