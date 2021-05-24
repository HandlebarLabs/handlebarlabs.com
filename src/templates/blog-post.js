import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';

import ContentLayout from '../layouts/Content';

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <ContentLayout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />

      <div className="prose prose-indigo prose-sm lg:prose-lg">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </ContentLayout>
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
      excerpt
    }
  }
`;
