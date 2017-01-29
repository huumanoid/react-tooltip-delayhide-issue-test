'use strict';

const path = require('path');

module.exports = {
    entry: './src/app.jsx',
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules|dist)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                },
            }
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
}
