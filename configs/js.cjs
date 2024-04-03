const {
    configs: { recommended },
} = require("@eslint/js");

module.exports = {
    default: {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
        },
        rules: recommended.rules,
    },
};
