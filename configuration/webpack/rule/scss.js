const css = require("./loader/css");
const sass = require("./loader/sass");
const style = require("./loader/style");

const rule = {
    test: /\.scss$/,
    use: [
        style,
        css,
        sass
    ]
};

module.exports = rule;
