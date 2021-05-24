import React from 'react';
import { Link, graphql } from 'gatsby';

import { Card } from '../components/Card';

const Home = ({ data }) => {
  return (
    <div className="mb-24">
      <div className="bg-hbl-brand text-white">
        <div className="container mx-auto px-8 py-6 max-w-7xl flex flex-row justify-end">
          <Link to="/blog" className="text-lg">
            Blog
          </Link>
        </div>
        <div className="text-center pt-24 pb-32 px-8">
          <h1 className="text-6xl mb-2 font-bold">Handlebar Labs</h1>
          <h3 className="text-2xl">
            Building Software and Information Products
          </h3>
        </div>
      </div>

      {/* Products */}
      <div className="container mx-auto px-8 py-6 max-w-7xl">
        <div className="mb-6">
          <h2 className="text-3xl font-semibold leading-tight pt-8 pb-2 text-gray-600">
            Products
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </div>
  );
};

export default Home;

export const query = graphql`
  query {
    products: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "content/products/" } }
      sort: { fields: frontmatter___updated, order: DESC }
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
  }
`;
