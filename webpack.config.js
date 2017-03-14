'use strict';

const path = require('path');

const entries = [
  'delay-hide',
  'effect',
  'dom-remove',
  'event-type',
  'original-position',
  'buttons',
  'click-buttons',
  'nested',
]
const entry = {}
for (const e of entries) {
  entry[e] = './src/' + e + '.jsx'
}

module.exports = {
    entry,
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
