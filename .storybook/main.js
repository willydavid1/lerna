module.exports = {
  stories: ["../packages/**/*.stories.js"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  webpackFinal: async (config) => {
    config.resolve.mainFields = ["src", "module", "main"];
    return config;
  },
};
