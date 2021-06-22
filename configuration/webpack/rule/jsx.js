const babel = require("./loader/babel");

const rule = {
    exclude: /node_modules/,
    test: /\.jsx$/,
    use: [
        babel
    ]
};

module.exports = rule;
