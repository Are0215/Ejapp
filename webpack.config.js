const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry:"./src-static/js/app.js",
    output:{
        filename:"./static/js/app.bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.css$/, 
                exclude: /node_modules/,
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:[
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                            }
                        },
                        'resolve-url-loader',
                        'postcss-loader',
                    ]

                })
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader"
            },
            { 
                test: /\.jsx?$/, 
                exclude: /node_modules/, 
                loader: "babel-loader",
                query: {
                    presets: ['env', 'react'],
                }
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'file-loader?name=static/fonts/[name].[ext]'
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: { 
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    } 
                }]
            }
        ]

    },
    target: 'web',
    plugins: [
        new ExtractTextPlugin('./static/css/app.bundle.css'),
    ]

}