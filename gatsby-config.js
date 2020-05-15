/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 * https://www.gatsbyjs.org/packages/gatsby-plugin-material-ui/#advanced
 */


module.exports = {
  siteMetadata: {
    title: `My little corner in the Web`,
    siteUrl: `https://www.gatsbyjs.org`,
    description: `Kasun Thennakoon's personal web`,
  },
  pathPrefix: `/`,
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blogs",
        path: `${__dirname}/src/resources/blog/content/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `static/copied/`,
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`],
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kasun Thennakoon's Personal Web`,
        short_name: `KnnectMe`,
        display: `standalone`,
        icon: 'static/images/favicon.png'
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // Google Analytics Tracking ID for me.knnect.com
        trackingId: "UA-34584055-3",
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
