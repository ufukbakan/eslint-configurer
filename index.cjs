const genericImport = require("generic-import");
const path = require("path");

const configurations = genericImport(path.resolve(__dirname, "configs"));
const pluginMap = Object.fromEntries(configurations.map(({ fileName, value }) => [fileName, value.default]));

function configure(...plugins) {
    const mappedPlugins = plugins.map((plugin) => pluginMap[plugin]);
    const flatPlugins = mappedPlugins.map((plugin) => (Array.isArray(plugin) ? plugin.flat() : [plugin]));
    return flatPlugins.reduce((acc, current) => [...acc, ...current], []);
}

module.exports = {
    configure,
};
