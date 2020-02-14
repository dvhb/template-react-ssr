module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/preset-create-react-app', '@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: config => {
    config.module.rules[2].use = [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: ['react-app', 'linaria/babel'],
        },
      },
      {
        loader: 'linaria/loader',
        options: {
          cacheDirectory: 'src/.linaria_cache',
          sourceMap: process.env.NODE_ENV !== 'production',
          babelOptions: {
            presets: ['react-app'],
          },
        },
      },
    ];
    return config;
  },
};
