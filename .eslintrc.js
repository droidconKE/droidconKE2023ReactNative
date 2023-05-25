/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['@react-native-community', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    '@typescript-eslint/array-type': ['error', { default: 'generic' }], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
    '@typescript-eslint/consistent-type-imports': 'error', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md
    'react/no-unescaped-entities': 'off', // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
    'react/react-in-jsx-scope': 'off',
  },
};
