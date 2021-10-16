module.exports = {
    env: {
        REST_API_URL: 'http://localhost:3001',
        REST_API_KEY: 'K4QouFjJu7xawHQq'
    },
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/i,
          issuer: { and: [/\.(js|ts|md)x?$/] },
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                svgoConfig: { plugins: [{ removeViewBox: false }] },
              },
            },
          ],
        });
        return config;
      },
};