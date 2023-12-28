module.exports = {
  default: {
    env: {
      browser: true,
    },
    extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ["react", "react-hooks"],
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
};
