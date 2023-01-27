module.exports = {
  transform: {
    "^.+\\.(css|sass|scss|less|stylus)$": require.resolve('./jest-transform-assets'),
    "^.+\\.(js|jsx|ts|tsx)$": require.resolve('./jest-transform-jtsx'),
    "^.+\\.vue$": "@vue/vue3-jest"
  },
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
 },
}
