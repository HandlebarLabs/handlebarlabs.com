import React from 'react';
import { Link, graphql } from 'gatsby';

import ContentLayout from '../layouts/Content';

const Blog = ({ data }) => {
  return (
    <ContentLayout>
      {data.blog.edges.map(({ node }) => (
        <Link key={node.id} to={node.fields.slug}>
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">
              {node.frontmatter.title}
            </h2>
            <p className="text-gray-500">{node.excerpt}</p>
          </div>
        </Link>
      ))}
    </ContentLayout>
  );
};

export default Blog;

export const query = graphql`
  query {
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
          excerpt
        }
      }
    }
  }
`;
