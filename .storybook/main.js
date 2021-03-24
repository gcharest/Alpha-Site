var webpack = require("webpack");
var path = require("path");

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y"
  ],
  webpackFinal: (config) => {
    config.plugins.push(
        new webpack.DefinePlugin({
          "process.env.__NEXT_IMAGE_OPTS": JSON.stringify({
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            domains: [],
            path: "/",
            loader: "default",
          }),
        })
    );
    return config;
  }
}