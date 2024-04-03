const { browser } = require("globals");

module.exports = {
    default: {
        languageOptions: {
            globals: { ...browser },
        },
    },
};
