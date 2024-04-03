const tslint = require("typescript-eslint");
const recommended = tslint.configs.recommended;
recommended.forEach((config) => {
    if (config.rules) {
        config.rules["no-undef"] = "error";
    }
});

module.exports = {
    default: recommended,
};
