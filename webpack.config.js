const path = require('path');
const webpack = require('webpack');

const config = {
    devtool: 'inline-source-map',
    entry: './src/scripts/script.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['.ts','.tsx','.js']
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            { test: /\.tsx?$/, loader: 'ts-loader'}
        ]
    }
}

module.exports = config