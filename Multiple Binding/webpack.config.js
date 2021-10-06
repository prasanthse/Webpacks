const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        css1: "/app/1.css",
        css2: "/app/2.css",
        js1: "/app/1.js",
        js2: "/app/2.js",
    },

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
        filename: "[name].bundle.js"
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html'
        })
    ],

    mode: "production"
};