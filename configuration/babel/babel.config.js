const configuration = {
    plugins: [
        require("./plugin/transform-runtime")
    ],
    presets: [
        require("./preset/env"),
        require("./preset/react")
    ]
};

module.exports = configuration;
