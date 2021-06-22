const css = require("./loader/css");
const style = require("./loader/style");

const rule = {
    test: /\.css$/,
    use: [
        style,
        css
    ]
};

module.exports = rule;
