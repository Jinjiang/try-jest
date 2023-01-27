const jest = require('jest')

jest.runCLI({
  rootDir: process.cwd(),
  config: require.resolve('../config/jest.config.js')
}, [
  process.cwd()
])
