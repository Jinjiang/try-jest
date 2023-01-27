// The test would be passed if move this file to the root directory
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: 16 } }],
    '@babel/preset-typescript',
  ],
};
