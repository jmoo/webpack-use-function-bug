const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },

            //* doesn't work
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: i => ([
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: true,
                        }
                    }
                ])
            }, /**/

            /* works with function if 'options' is not defined
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: i => ([
                    {
                        loader: 'babel-loader'
                    }
                ])
            },/**/

            /* works without function with 'options' defined
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: true,
                        }
                    }
                ]
            }, /**/
        ]
    },

    entry: {
        test: 'index.js',
    },

    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },

    resolve: {
        extensions: ['*', '.js', '.vue'],
        modules: ['./', 'node_modules'],
    },

    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(['dist'])
    ]
};
