const utils = require("./util.cjs");
const js = require("./configs/js.cjs");
const prettier = require("./configs/prettier.cjs");
const react = require("./configs/react.cjs");
const ts = require("./configs/ts.cjs");

const pluginMap = {
  js: js.default,
  prettier: prettier.default,
  react: react.default,
  ts: ts.default
};

function configure(...plugins) {
  const mappedPlugins = plugins.map((plugin) => pluginMap[plugin])
  return utils.mergeDeep(...mappedPlugins);
}

module.exports = {
  configure,
};
