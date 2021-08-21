
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    output: { path: __dirname + '/dist/', filename: 'bundle.js' },
    plugins: [
        new HtmlWebPackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    resolve: { extensions: ['.tsx', '.ts', '.js'] }
}