const rootPath = require("../root-path");

const configuration = {
    moduleNameMapper: require("./jest.alias"),
    rootDir: rootPath,
    transform: {
        "\\.js$": "<rootDir>/configuration/jest/transformer/babel.js"
    }
};

module.exports = configuration;
