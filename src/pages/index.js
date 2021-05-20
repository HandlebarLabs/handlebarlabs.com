import React from 'react';
import { Link, graphql } from 'gatsby';

export default function Home({ data }) {
  return (
    <div className="container mx-auto px-8 py-6">
      <h2 className="text-3xl font-semibold leading-tight pt-8 pb-2 text-gray-800">
        Products
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {data.products.edges.map(({ node }) => (
          <Link key={node.id} to={node.fields.slug}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full h-36 object-cover"
                src={node.frontmatter.logo.publicURL}
                alt={`${node.frontmatter.name} Logo`}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {node.frontmatter.name}
                </div>
                <p className="text-gray-700 text-base">{node.excerpt}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {node.frontmatter.status}
                </span>
              </div>
            </div>
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
