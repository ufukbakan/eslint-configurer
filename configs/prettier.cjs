const eslintConfigPrettier = require("eslint-config-prettier");
const eslintPluginPrettier = require("eslint-plugin-prettier");

// Merge the contents of eslint-config-prettier into every
module.exports = {
    default: {
        ...eslintConfigPrettier,
        plugins: {
            ...eslintConfigPrettier.plugins,
            prettier: eslintPluginPrettier,
        },
        rules: {
            ...eslintConfigPrettier.rules,
            "prettier/prettier": "error",
            "arrow-body-style": "off",
            "prefer-arrow-callback": "off",
        },
    },
};
