import React from 'react';
import { Link, graphql } from 'gatsby';

export default function Home({ data }) {
  return (
    <div className="container mx-auto px-8 max-w-screen-md content">
      <h2 className="text-3xl font-semibold leading-tight pt-8 pb-2 text-gray-800">
        Products
      </h2>
      <ul>
        {data.products.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.frontmatter.name}</Link>
          </li>
        ))}
      </ul>

      <h2 className="text-3xl font-semibold leading-tight pt-8 pb-2 text-gray-800">
        Blog
      </h2>
      <ul>
        {data.blog.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const query = graphql`
  query {
    products: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "content/products/" } }
    ) {
      edges {
        node {
          frontmatter {
            name
          }
          fields {
            slug
          }
        }
      }
    }

    blog: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "content/blog/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
