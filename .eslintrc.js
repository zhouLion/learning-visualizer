module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-webpack-loader-syntax': 'off',
    'import/no-duplicates': 'off',
    'import/extensions': 'off'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
