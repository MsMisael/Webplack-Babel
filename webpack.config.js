
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: { path: __dirname + '/dist/', filename: 'bundle.js' },
    plugins: [
        new HtmlWebPackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
    ],
    module:{
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
        ]
    }
}