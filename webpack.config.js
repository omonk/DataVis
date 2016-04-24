// var path = require('path'),
//     webpack = require('webpack');

module.exports = {
    devtool: "#eval-sourcemap",
    entry: './app/scripts/App.js',
    output: {
        path: './public',
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        contentBase: './public'
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
            test: /.json?$/,
            loader: 'json',
            exclude: /node_modules/
        }]
    }
};
