module.exports = {
  transform: {
    "^.+\\.(css|sass|scss|less|stylus)$": require.resolve('./jest-transform-assets'),
    "^.+\\.(js|jsx|ts|tsx)$": require.resolve('./jest-transform-jtsx'),
    "^.+\\.(vue)$": require.resolve('./jest-transform-vue'),
  },
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
 },
}
