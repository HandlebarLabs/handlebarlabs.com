import React from 'react';
import { graphql } from 'gatsby';
import { format } from 'date-fns';
import SEO from '../components/SEO';

import ContentLayout from '../layouts/Content';

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <ContentLayout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />

      <p className="block text-gray-500 uppercase font-semibold text-xs tracking-wide mb-2">
        Last Updated on{' '}
        <time dateTime={post.frontmatter.updated}>
          {format(new Date(post.frontmatter.updated), 'MMMM do, yyyy')}
        </time>
      </p>

      <div className="prose prose-indigo prose-lg">
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
        updated
      }
      excerpt
    }
  }
`;
