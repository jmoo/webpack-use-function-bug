module.exports = function (api) {
    api.cache(true);

    return {
        plugins: [
            "@babel/plugin-syntax-dynamic-import",
            '@babel/plugin-transform-modules-commonjs'
        ],
        presets: [
            [
                "@babel/preset-env",
                {
                    debug: true,
                    targets: {
                        ie: "10",
                    }
                }
            ]
        ],
        comments: false
    }
};
