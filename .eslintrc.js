module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'react-hooks/exhaustive-deps': 'off', // <--- THIS IS THE NEW RULE,
    'react-native/no-unused-styles': 'warn',
  },
};
