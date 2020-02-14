require('dotenv').config();
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    // TEST_VAR: process.env.TEST_VAR,
  },
  cssModules: true,
  webpack(config) {
    const babelLoader = config.module.rules[0].use;
    config.module.rules[0].use = [
      babelLoader,
      {
        loader: 'linaria/loader',
        options: {
          sourceMap: process.env.NODE_ENV !== 'production',
        },
      },
    ];
    return config;
  },
});
