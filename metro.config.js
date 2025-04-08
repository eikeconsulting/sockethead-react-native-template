const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const withStorybook = require('@storybook/react-native/metro/withStorybook');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.transformer = {
  ...defaultConfig.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
};

defaultConfig.resolver = {
  ...defaultConfig.resolver,
  assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
  sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
};

const config = {
  resetCache: true,
  transformer: defaultConfig.transformer,
  resolver: defaultConfig.resolver,
};

module.exports = withStorybook(mergeConfig(defaultConfig, config));
