const jest = require('jest')

jest.runCLI({
  config: require.resolve('../jest.config.js')
}, [
  process.cwd()
])
