import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

// TODO tmkasun: To be implemented using context
// https://www.gatsbyjs.com/plugins/gatsby-plugin-layout/#passing-data-from-layout-to-page--from-page-to-layout
function usePageMetaData(): { title?: string; description?: string } {
  return {};
}

function HelmetHeader() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  const lang = "en"; // TODO get browser language
  const { description, title } = usePageMetaData(); // TODO need to implement
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || site.siteMetadata.title}
    >
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <meta charSet="utf-8" />
      <meta
        name="google-site-verification"
        content="HG175urvUYiOtY5xEr_C5Lr5wrvNywyYFO5QM0UJiR8"
      />
      <meta
        name="description"
        content={description || site.siteMetadata.description}
      />
    </Helmet>
  );
}

export default HelmetHeader;
