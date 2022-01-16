const path = require('path');


module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  typescript: {
    check: true,
    checkOptions: {
      tsconfig: "./tsconfig.json",
    },
  },
  webpackFinal: async (config, {configType}) => {
    config.module.rules.push({
      test: /\.scss$/,
      loaders: [
            require.resolve('style-loader'),
            require.resolve('css-loader'),
            require.resolve('sass-loader')
        ],
    });
    
    return config
  }
}
