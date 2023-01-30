const crypto = require('crypto')
const { compile } = require('vue-simple-compiler')
const { process } = require('./jest-transform-jtsx')

module.exports = {
  process(code, filename) {
    const result = compile(code, { filename, autoImportCss: ture })
    return process(result.js.content, filename)
  },
  getCacheKey(fileData) {
    return crypto
      .createHash('md5')
      .update(fileData)
      .digest('hex')
  }
}
