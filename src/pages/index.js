import React from 'react';
import { Link, graphql } from 'gatsby';

import { Card } from '../components/Card';

export default function Home({ data }) {
  return (
    <div className="container mx-auto px-8 py-6">
      <h2 className="text-3xl font-semibold leading-tight pt-8 pb-2 text-gray-800">
        Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.products.edges.map(({ node }) => (
          <Link key={node.id} to={node.fields.slug}>
            <Card
              name={node.frontmatter.name}
              image={node.frontmatter.logo.publicURL}
              excerpt={node.excerpt}
              status={node.frontmatter.status}
            />
          </Link>
        ))}
      </div>

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
          id
          frontmatter {
            name
            logo {
              publicURL
            }
            status
          }
          excerpt
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
          id
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
