const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        style: ['./app/CSS/1.css', './app/CSS/2.css'],
        script: ['./app/JS/1.js', './app/JS/2.js']
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