module.exports = {
  extends: ["airbnb-base", 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    'prettier/prettier': 'error',
  },
  parserOptions: {
    "sourceType": "module"
  }
};
