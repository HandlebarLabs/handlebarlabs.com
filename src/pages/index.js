import React from 'react';
import { Link, graphql } from 'gatsby';

export default function Home({ data }) {
  return (
    <>
      <h2>Products</h2>
      <ul>
        {data.products.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.frontmatter.name}</Link>
          </li>
        ))}
      </ul>

      <h2>Blog</h2>
      <ul>
        {data.blog.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </>
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
