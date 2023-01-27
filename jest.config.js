module.exports = {
  transform: {
    "^.+\\.(css|sass|scss|less|stylus)$": require.resolve('./config/jest-transform-assets'),
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    "^.+\\.vue$": "@vue/vue3-jest"
  },
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
 },
}
