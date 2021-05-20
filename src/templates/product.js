import React from 'react';
import { graphql } from 'gatsby';

const ProductTemplate = ({ data }) => {
  const product = data.markdownRemark;

  return (
    <div className="container mx-auto px-8 py-6 max-w-screen-md">
      {product.frontmatter.logo && (
        <img
          src={product.frontmatter.logo.publicURL}
          alt={`${product.frontmatter.name} Logo`}
          className="mb-4 rounded-full h-24 w-24 object-cover"
        />
      )}
      <h1 className="font-bold text-4xl leading-none text-gray-800 pt-1">
        {product.frontmatter.name}
      </h1>
      <div className="prose">
        <div dangerouslySetInnerHTML={{ __html: product.html }} />
      </div>
    </div>
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
    }
  }
`;
