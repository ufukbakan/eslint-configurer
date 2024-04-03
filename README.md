# eslint-configurer
This package uses ESLint flat configs
## Installation
```shell
npm i -D eslint-configurer
```
## Usage
```eslint.config.mjs```
```js
import { configure } from "eslint-configurer";

export default configure("js", "ts", "react");
```

## API
```ts
type Plugin = "js" | "react" | "prettier" | "ts" | "node";

function configure(...plugins: Plugin[]): Array<Record<string, any>>;
```

## Recommended Integrations

### .prettierrc
It's recommended to create a .prettierrc configuration file at the source root when using "prettier" preset of this configurer. All configuration file types are supported. A yaml sample provided below:
```.prettierrc.yaml```
```yaml
trailingComma: es5
tabWidth: 4
singleQuote: false
printWidth: 200
endOfLine: crlf
overrides:
  - files: "*.{ts,tsx}"
    options:
      bracketSameLine: true
      bracketSpacing: true
      cursorOffset: -1
      jsxSingleQuote: true
      printWidth: 80
      semi: true
```

### package.json
This section has dependencies to ```husky``` and ```lint-staged```.
The following package.json content is a good practice for linting before committing any file.

```json
  "scripts": {
    "lint": "lint-staged",
    "prepare": "husky install && husky add .husky/pre-commit \"npm run lint\""
  },
  "lint-staged": {
    "*.{js,ts,jsx,tsx}": [
      "eslint --fix",
      "eslint"
    ]
  },
```
