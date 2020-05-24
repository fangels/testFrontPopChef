module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
  ],
  rules: {
    'comma-dangle': ["error", {
      "arrays": "always",
      "objects": "always",
      "imports": "always",
      "exports": "always",
      "functions": "ignore"
    }],
    'array-bracket-spacing': ["error","always"]
  }
}
