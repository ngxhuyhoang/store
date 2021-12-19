module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@navigators': ['./src/navigators'],
          '@containers': ['./src/containers'],
          '@stores': ['./src/stores'],
          '@components': ['./src/components'],
          '@core': ['./src/core'],
          '@assets': ['./src/assets'],
          '@utils': ['./src/utils'],
          '@hooks': ['./src/hooks'],
          '@layouts': ['./src/layouts'],
          '@services': ['./src/services'],
          '@screens': ['./src/screens'],
        },
      },
    ],
  ],
};
