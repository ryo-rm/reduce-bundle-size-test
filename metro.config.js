const { getDefaultConfig } = require("expo/metro-config");

const {
  MetroSerializer,
  esbuildTransformerConfig,
} = require("@rnx-kit/metro-serializer-esbuild");

const config = getDefaultConfig(__dirname);

module.exports = {
  ...config,
  serializer: {
    ...config.serializer,
    customSerializer: MetroSerializer(),
  },
  transformer: esbuildTransformerConfig,
};
