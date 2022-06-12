module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json', '.svg', '.jpg'],
        alias: {
          '@components': './src/components',
          '@action': ['./src/redux/action'],
          '@reducers': ['./src/redux/reducers'],
          '@action_constant': ['./src/redux/action_constant'],
          '@log': ['./src/utils/log/index.js'],
          '@utils': ['./src/utils'],
          '@helpers': ['./src/helpers'],
          '@network': ['./src/services'],
          '@translations': ['./src/translations'],
          '@theme': ['./src/theme'],
        },
      },
    ],
  ],
};
