module.exports = {
    env: {
      node: true,
      mocha: true,
      es2021: true
    },
    extends: [
      'eslint:recommended',
      'plugin:prettier/recommended'
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'no-console': 'off',
      'prettier/prettier': ['error', {
        singleQuote: true,
        trailingComma: 'none',
        semi: true,
        tabWidth: 4,
        printWidth: 100,
        endOfLine: 'auto'
      }]
    }
  };