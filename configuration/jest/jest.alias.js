const aliases = require("../aliases");

const jestAliases = {};

addDirectoryAliases(aliases);

function addDirectoryAliases(aliases)
{
    if (aliases.directory === undefined)
    {
        return;
    }

    Object.keys(aliases.directory).forEach(alias =>
    {
        jestAliases[`${alias}/(.*)$`] = `<rootDir>/${aliases.directory[alias]}/$1`
    });
}

module.exports = jestAliases;
