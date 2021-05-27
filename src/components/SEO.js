import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import defaultMetaImage from '../../static/handlebarlabs.png';
import logoRound from '../../static/hbl-round.png';

const SEO = ({
  title,
  description,
  metaImage,
  siteMetadata: seo,
  image = metaImage?.startsWith('http:') || metaImage?.startsWith('https:')
    ? metaImage
    : `${seo.siteUrl}${metaImage || defaultMetaImage}`,
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="image" content={image} />
    <link rel="icon" href={logoRound} />
  </Helmet>
);

function SEOWithQuery(props) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);
  return <SEO siteMetadata={siteMetadata} {...props} />;
}

export default SEOWithQuery;
