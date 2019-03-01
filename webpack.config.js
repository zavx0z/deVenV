const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ComponentDirectoryPlugin = require("component-directory-webpack-plugin")

module.exports = {
    entry: {
        main: "../src/js/main.js",
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "./js/main.js"
    },
    resolve: {
        plugins: [new ComponentDirectoryPlugin()],
        extensions: [".js", ".jsx"]
    },
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, "src/js"),
            use: {
                loader: "babel-loader",
            }
        },
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: "../src/index.html",
                to: "../dist/index.html"
            },
            {
                from: "./faviconJS.png",
                to: "../dist/faviconJS.png"
            },
        ]),
    ]
}
