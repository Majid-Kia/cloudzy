/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-root-import`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 100,
          breakpoints: [600, 900, 1200, 1920],
          backgroundColor: `transparent`,
          placeholder: "none",
        },
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        additionalData: `
        @use "./src/styles/global/_variabels.scss" as *;
        @use "./src/styles/global/_mixins.scss" as *;
      `,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/static/fonts/roboto`,
      },
    },
  ],
};
