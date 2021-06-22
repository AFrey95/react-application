const babel = require("./loader/babel");

const rule = {
    exclude: /node_modules/,
    test: /\.js$/,
    use: [
        babel
    ]
};

module.exports = rule;
