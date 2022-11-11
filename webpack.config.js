const {resolve} = require('path');
//from video used for configuring our bundler
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const plugins = [
    new HtmlWebpackPlugin({
        template: './src/popup.html',
        filename: 'popup.html',
        chunks: ['popup']
    }),
    new CopyWebpackPlugin({
        patterns: [
            {from: 'public', to: '.'},
        ] 
    }),
    new CleanWebpackPlugin()
];


module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: {
        popup: './src/popup.tsx',
        background: './src/background.ts',
        content: './src/content.ts',
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            }
        ]
    },
    plugins,
};