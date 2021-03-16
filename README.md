# Asurgent ESLint-config

Default linting rules.
```javascript
{
  extends: ['airbnb'],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parser: 'babel-eslint',
  rules: {
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
  },
}
```

## Dependencies
* `"babel-eslint": "^10.1.0",`
* `"eslint": "^7.22.0",`
* `"eslint-config-airbnb": "^18.2.1",`
* `"eslint-import-resolver-alias": "^1.1.2",`
* `"eslint-plugin-import": "^2.22.1",`
* `"eslint-plugin-jsx-a11y": "^6.4.1",`
* `"eslint-plugin-react": "^7.22.0",`
* `"eslint-plugin-react-hooks": "^4.2.0"`
