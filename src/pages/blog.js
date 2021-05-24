import React from 'react';
import { graphql } from 'gatsby';

import ContentLayout from '../layouts/Content';
import ProjectItem from '../components/ProjectItem';
import SEO from '../components/SEO';

const Blog = ({ data }) => {
  return (
    <ContentLayout>
      <SEO
        title="Blog | Handlebar Labs"
        description="Latest thoughts and ideas related to building software and information products."
      />

      {data.blog.edges.length === 0 && (
        <p className="text-gray-700">Nothing to see here... yet.</p>
      )}
      {data.blog.edges.map(({ node }) => (
        <ProjectItem
          key={node.id}
          slug={node.fields.slug}
          name={node.frontmatter.title}
          caption={node.excerpt}
        />
      ))}
    </ContentLayout>
  );
};

export default Blog;

export const query = graphql`
  query {
    blog: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "content/blog/" }
        frontmatter: { published: { eq: true } }
      }
      sort: { fields: frontmatter___updated, order: DESC }
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
