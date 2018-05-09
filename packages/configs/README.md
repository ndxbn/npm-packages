My Config files for some node modules.

## Install

install packages: `npm i -D @ndxbn/configs jest typescript`

put `tsconfig.json` on your project root as:

```json
{
  "extends": "./node_modules/@ndxbn/configs/tsconfig.json"
}
```

add `jest` configuration in your `package.json` as:

```json
{
  "jest": {
    "preset": "@ndxbn/configs"
  }
}
```
