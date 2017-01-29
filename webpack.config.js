'use strict';

const path = require('path');

module.exports = {
    entry: {
        "delay-hide": "./src/delay-hide.jsx",
        effect: "./src/effect.jsx",
    },
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
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
}
