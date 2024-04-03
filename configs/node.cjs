const { node } = require("globals");

module.exports = {
    default: {
        languageOptions: {
            globals: { ...node },
        },
    },
};
