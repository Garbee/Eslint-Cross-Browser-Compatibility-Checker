# eslint-plugin-eslint-cross-browser-compatibility-check

Check JS for cross-browser problems.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-eslint-cross-browser-compatibility-check`:

```
$ npm install eslint-plugin-eslint-cross-browser-compatibility-check --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-eslint-cross-browser-compatibility-check` globally.

## Usage

Add `eslint-cross-browser-compatibility-check` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "eslint-cross-browser-compatibility-check"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "eslint-cross-browser-compatibility-check/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





