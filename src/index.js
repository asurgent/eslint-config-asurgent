const config = (override = {}) => {
  // Deconstruct theses attrs to limit what you can extend linter with
  const {
    env,
    rules,
    parserOptions,
    ...restOverride
  } = override;

  const result = ({
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
      'import/prefer-default-export': 'off',
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
    ...restOverride,
  });

  return result;
};

module.exports = config;
