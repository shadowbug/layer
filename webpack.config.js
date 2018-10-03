
const webpack = module.require("webpack");
const path = module.require("path");
var MiniCssExtractPlugin = module.require('mini-css-extract-plugin');

module.exports = (env, args) => {

    const config = {
        entry : {
            "layer" : "./src/layer.js"
        },
        output: {
            filename : "[name].bundle.js",
            path : __dirname + "/dist"
        },
        devtool: 'inline-source-map',
        plugins : [
            new webpack.HotModuleReplacementPlugin(),
            new MiniCssExtractPlugin({
                filename: "[name].bundle.css",
                path: __dirname + "/dist"
            })   
        ],   
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: path.join(__dirname),
                    exclude: /(node_modules)|(dist)/,
                    use: {
                        loader: "babel-loader",
                        options : {
                            plugins : ["babel-plugin-transform-runtime"],
                            presets: ["env"]
                        }
                    }
                },
                {
                    test: /\.ejs$/,
                    include: path.join(__dirname),
                    exclude: /(node_modules)|(dist)/,
                    use: {
                        loader: "ejs-loader"
                    }
                },
                {
                    test: /(\.css$)/,
                    include: path.join(__dirname),
                    exclude: /(node_modules)|(node)|(dist)/,
                    use : [
                        MiniCssExtractPlugin.loader,
                        { loader: "css-loader" }
                    ]
                }
            ]
        }    
    };

    return config;
};