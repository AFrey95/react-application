const path = require("path");

const rootPath = require("../../../root-path");

const loader = {
    loader: "babel-loader",
    options: {
        configFile: path.resolve(rootPath, "configuration/babel/babel.config.js")
    }
};

module.exports = loader;
