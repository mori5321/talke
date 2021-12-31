module.exports = {
  ignorePatterns: ['.eslintrc.js', 'node_modules/**/*'],
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint'
  ],
  globals: {
    JSX: true
  },
  rules: {
  }
}

