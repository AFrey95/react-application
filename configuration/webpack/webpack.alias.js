const path = require("path");

const aliases = require("../aliases");
const rootPath = require("../root-path");

const webpackAliases = {};

addDirectoryAliases(aliases);

function addDirectoryAliases(aliases)
{
    if (aliases.directory === undefined)
    {
        return;
    }

    Object.keys(aliases.directory).forEach(alias =>
    {
        webpackAliases[alias] = path.resolve(rootPath, `${aliases.directory[alias]}/`);
    });
}

module.exports = webpackAliases;
