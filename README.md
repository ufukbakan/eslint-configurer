# eslint-with-prettier
## Installation
Recommended way (Needs global package [install-peerdeps](https://www.npmjs.com/package/install-peerdeps)):
```shell
install-peerdeps eslint-config-airbnb -D
```
## Integration
### ESLint Configuration
It's recommended to use .cjs file type for .eslintrc
```cjs
const { configure } = require("eslint-with-prettier");

module.exports = {
    ...configure("js", "react", "prettier"),
    // your other eslint configurations (you may dont want to override configured values, so you can inspect output of configure method by logging in any js file)
}
```

You can customize prettier via your project's .prettierrc file

### package.json
This configuration has dependencies to ```husky``` and ```lint-staged```.

The following package.json content is a good practice for linting before committing any file.

```json
  "scripts": {
    "lint": "lint-staged",
    "prepare": "husky install && husky add .husky/pre-commit \"npm run lint\""
  },
  "lint-staged": {
    "*.js": [
      "eslint --fix",
      "eslint"
    ],
    "*.jsx": [
      "eslint --fix",
      "eslint"
    ],
    "*.ts": [
      "eslint --fix",
      "eslint"
    ],
    "*.tsx": [
      "eslint --fix",
      "eslint"
    ]
  },
```