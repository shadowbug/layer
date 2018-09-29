
const path = require("path");

module.exports = (env, args) => {

    const config = {
        entry : {
            "layer" : "./src/layer.js"
        },
        output: {
            filename : "[name].bundle.js",
            path : __dirname + "/dist"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: path.join(__dirname),
                    exclude: /(node_modules)|(node)|(dist)/,
                    use: {
                        loader: "babel-loader",
                        options : {
                            plugins : ["babel-plugin-transform-runtime"],
                            presets: ["env"]
                        }
                    }
                }
            ]
        }    
    };
    



    return config;
};