const path = require('path');
// @see https://github.com/jantimon/html-webpack-plugin
const HTML_WP = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTML_WP({
            title: 'Typescript Client'
        })
    ]
};
