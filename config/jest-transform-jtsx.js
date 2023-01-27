const { transform } = require('@babel/core');

// TODO: getCacheKey() is not implemented
module.exports = {
  process(src, filename) {
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
  },
};
