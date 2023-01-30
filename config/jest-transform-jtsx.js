const crypto = require('crypto')
const { transform } = require('@babel/core');

module.exports = {
  process(src, filename) {
    try {
      const result = transform(src, {
        sourceMap: 'inline',
        filename,
        presets: [
          [require('@babel/preset-env'), { targets: { node: 16 }}],
          require('@babel/preset-typescript'),
        ],
        plugins: [],
        babelrc: false,
        configFile: false,
      });
      return result || { code: src };
    } catch (error) {
      console.error('jest-transform-jtsx error', error);
      return { code: src };
    }
  },
  getCacheKey(fileData) {
    return crypto
      .createHash('md5')
      .update(fileData)
      .digest('hex')
  }
};
