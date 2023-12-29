# eslint-with-prettier
## Installation
Recommended way (Needs global package [install-peerdeps](https://www.npmjs.com/package/install-peerdeps)):
```shell
install-peerdeps eslint-config-airbnb -D
```
## Integration
### Recommended configs
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