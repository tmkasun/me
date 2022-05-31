import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My little corner in the Web`,
    siteUrl: `https://me.knnect.com`,
    description: `Kasun Thennakoon's personal web`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: path.resolve(`src/components/layouts/Base.tsx`),
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-34584055-3",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Kasun Thennakoon's Personal Web`,
        short_name: `KnnectMe`,
        display: `standalone`,
        icon: 'static/images/favicon.png'
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

export default config;
