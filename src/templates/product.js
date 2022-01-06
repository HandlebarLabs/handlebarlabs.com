import React from 'react';
import { graphql } from 'gatsby';

import ContentLayout from '../layouts/Content';
import SEO from '../components/SEO';

const ProductTemplate = ({ data }) => {
  const product = data.markdownRemark;

  return (
    <ContentLayout
      leftContent={
        product.frontmatter.logo && (
          <div className="flex justify-end">
            <img
              src={product.frontmatter.logo.publicURL}
              alt={`${product.frontmatter.name} Logo`}
              className="mb-4 h-24 object-cover rounded"
            />
          </div>
        )
      }
    >
      <SEO
        title={`${product.frontmatter.name} | Handlebar Labs`}
        description={product.excerpt}
        image={product.frontmatter.logo.publicURL}
      />
      <h1 className="font-bold text-4xl leading-none text-gray-800 mb-0">
        {product.frontmatter.name}
      </h1>

      <div className="prose prose-indigo prose-lg">
        <div dangerouslySetInnerHTML={{ __html: product.html }} />
      </div>
    </ContentLayout>
  );
};

export default ProductTemplate;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        name
        logo {
          publicURL
        }
      }
      excerpt
    }
  }
`;
