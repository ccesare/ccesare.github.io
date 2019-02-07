const path = require("path")
const WebpackWatchedGlobEntries = require("webpack-watched-glob-entries-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
// console.log(WebpackWatchedGlobEntries.getEntries([path.resolve(__dirname, "webpack/**/*.js")]))

module.exports = {
    node: {
        "fs": "empty"
    },
    mode: "development",
    entry: WebpackWatchedGlobEntries.getEntries(
        [
            path.resolve(__dirname, "webpack/**/*.js")
        ],
        {
            // Optional glob options that are passed to glob.sync()
            ignore: "**/*.test.js",
        }
    ),
    output: {
        // We're going to put the generated file in the assets folder so Jekyll will grab it.
        path: __dirname + "/assets/js/",
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader", // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ["react", "es2015"]
                }
            },
            {
                test: /\.md$/,
                use: ["json-loader", "yaml-frontmatter-loader"]
            }
        ]
    },
    plugins: [
        new WebpackWatchedGlobEntries(),
        new CleanWebpackPlugin(["assets/js"])
    ]
}
