module.exports = {
  presets: [['@babel/preset-env', { targets: { browsers: ['last 2 versions'] } }], '@babel/preset-react'],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
  ],
  ignore: ['node_modules', 'dist'],
};