const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const package = require("../../../package.json");
const rootPath = require("../../root-path");

const plugin = new HtmlWebpackPlugin(
{
    template: path.resolve(rootPath, "source/main/application/index.html"),
    title: package.name
});

module.exports = plugin;
