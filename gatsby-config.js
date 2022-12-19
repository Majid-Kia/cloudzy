/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/cloudzy",
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-root-import`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 100,

          breakpoints: [600, 900, 1200, 1920],
          backgroundColor: `transparent`,
          placeholder: "none",
          formats: ["auto", "png"],
          webpOptions: {
            quality: 100,
          },
          pngOptions: {
            quality: 100,
          },
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
    // {
    //   resolve: "gatsby-plugin-google-tagmanager",
    //   options: {
    //     id: "GTM-MJ3RHZR",

    //     includeInDevelopment: false,

    //     defaultDataLayer: { platform: "gatsby" },
    //   },
    // },
  ],
};
