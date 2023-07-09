/**
 * 用于 JS 的通用规则库
 * 默认导出
 */
module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['simple-import-sort', 'import', 'prettier'],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': ['off', 'never'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'arrow-body-style': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
  },
};
