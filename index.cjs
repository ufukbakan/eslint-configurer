const utils = require("./util.cjs");
const js = require("./js.cjs");
const prettier = require("./prettier.cjs");
const react = require("./react.cjs");

const pluginMap = {
  js: js.default,
  prettier: prettier.default,
  react: react.default,
};

function configure(...plugins) {
  const mappedPlugins = plugins.map((plugin) => pluginMap[plugin])
  return utils.mergeDeep(...mappedPlugins);
}

module.exports = {
  configure,
};
