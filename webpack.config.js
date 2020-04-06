// Libraries
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = (env) => {
    const isProduction = env === 'production'
    const CSSExtract = new ExtractTextPlugin('bundle.css')
    
    return {
        entry: './src/react/app.tsx',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        resolve: {
            extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx", ".json"]
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }, {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            }, {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }
}