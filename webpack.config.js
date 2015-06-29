/*global require, module, __dirname*/
var path = require('path');
var scriptsSrcPath = path.join(__dirname, 'frontend', 'scripts'),
    dev = true;

module.exports = {
    cache: true,
    watch: true,
    devtool: dev ? 'source-map' : null,
    entry: path.join(scriptsSrcPath, 'main.js'),
    output: {
        path: './public/',
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: 'style!css?localIdentName=' + ( dev ? '[name]__[local]___[hash:base64:5]' : '[hash:base64:5]' ) + '!less'
            },
            {
                test: /\.js$/,
                loader: 'babel?stage=0'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    }
};
