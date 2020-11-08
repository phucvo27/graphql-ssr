const path = require('path');
const entryPath = path.resolve(__dirname, 'client', 'index.js');
console.log(entryPath)
const config = {
    entry: entryPath,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'client', 'public')
    },
    mode: "development",
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /.(js|jsx)$/,
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'inline-source-map',
}

module.exports = config;