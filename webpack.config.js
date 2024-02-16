const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
            publicPath: '/',
        },
        open: true
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images', 
                        },
                    },
                    'html-loader'
                ],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
        new ImageminPlugin({
            test: /\.(png|jpe?g|gif|svg)$/i,
            disable: process.env.NODE_ENV !== 'production',
            pngquant: {
                quality: '65-80',
            },
            jpegtran: {
                progressive: true,
            },
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new OptimizeCssAssetsPlugin(),
        ],
    },
};

