const babelJest = require("babel-jest");
const path = require("path");

const rootPath = require("../../root-path");

const transformer = babelJest.createTransformer(
{
    configFile: path.resolve(rootPath, "configuration/babel/babel.config.js")
});

module.exports = transformer;
