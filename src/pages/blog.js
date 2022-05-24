import React from 'react';
import { graphql } from 'gatsby';
import { orderBy } from 'lodash';

import ContentLayout from '../layouts/Content';
import ProjectItem from '../components/ProjectItem';
import SEO from '../components/SEO';

const Blog = ({ data }) => {
  const allContent = [...data.blog.edges, ...data.externalContent.edges].map(
    item => {
      if (item?.node?.frontmatter?.updated) {
        // item.node.date = item.node.frontmatter.updated;
        return {
          ...item,
          node: {
            ...item.node,
            date: item.node.frontmatter.updated,
          },
        };
      }

      return item;
    },
  );

  const sortedContent = orderBy(allContent, ['node.date'], ['desc']);

  return (
    <ContentLayout>
      <SEO
        title="Blog | Handlebar Labs"
        description="Latest thoughts and ideas related to building software and information products."
      />

      {data.blog.edges.length === 0 && (
        <p className="text-gray-700">Nothing to see here... yet.</p>
      )}
      {sortedContent.map(({ node }) => {
        if (!node.frontmatter) {
          // is external content
          return (
            <ProjectItem
              key={node.url}
              slug={node.url}
              name={node.title}
              caption={node.summary}
              date={node.date}
              external
            />
          );
        }

        return (
          <ProjectItem
            key={node.id}
            slug={node.fields.slug}
            name={node.frontmatter.title}
            caption={node.excerpt}
            date={node.frontmatter.updated}
          />
        );
      })}
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
            updated
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }

    externalContent: allExternalContentYaml(
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          title
          summary
          # date(formatString: "MMMM Do, yyyy")
          date
          url
          tags
        }
      }
    }
  }
`;
