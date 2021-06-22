const path = require("path");

const rootPath = require("../root-path");

const configuration = {
    devtool: "source-map",
    entry: {
        "index": path.resolve(rootPath, "source/main/application/index.jsx")
    },
    module: {
        rules: [
            require("./rule/css"),
            require("./rule/js"),
            require("./rule/jsx"),
            require("./rule/scss")
        ]
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(rootPath, "build")
    },
    plugins: [
        require("./plugin/html")
    ],
    resolve: {
        alias: require("./webpack.alias"),
        extensions: [".js", ".jsx"]
    }
};

if (process.env.NODE_ENV === "development")
{
    configuration.devtool = "eval-source-map";
    configuration.devServer = {
        overlay: true
    };
}

module.exports = configuration;
