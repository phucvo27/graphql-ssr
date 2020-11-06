const path = require('path');
const { merge } = require('webpack-merge');
const base =require('./webpack.base')
const config = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'node',
   
}

module.exports = merge(base, config);