const reactPlugin = require("eslint-plugin-react");
const reactHooksPlugin = require("eslint-plugin-react-hooks");
const { mergeDeep } = require("../util.cjs");
const { browser } = require("globals");

module.exports = {
    default: {
        languageOptions: {
            globals: {
                ...browser,
            },
        },
        ...mergeDeep(reactPlugin.configs.recommended, reactHooksPlugin.configs.recommended),
    },
};
