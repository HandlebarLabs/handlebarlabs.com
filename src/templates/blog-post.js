import React from 'react';
import { graphql } from 'gatsby';

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <div className="prose container mx-auto px-8 max-w-screen-md">
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
