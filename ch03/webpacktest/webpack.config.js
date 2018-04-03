module.exports = { 
    devtool: 'source-map',
    entry: __dirname + '/src/main.js', 
    output: { 
        path: __dirname + '/public', 
        filename: 'bundle.js' 
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ],
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'env',
                            'react'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                   { loader: "style-loader" },
                   { loader: "css-loader", options: { modules: true } }
                ]
            }
        ]
    },
    devServer: {
        contentBase: './public',
        inline: true, 
        historyApiFallback: true,
        port: 7777
    }
 };