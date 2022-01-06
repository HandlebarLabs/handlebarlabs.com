import React from 'react';
import { graphql } from 'gatsby';

import ContentLayout from '../layouts/Content';
import ProjectItem from '../components/ProjectItem';
import SEO from '../components/SEO';

const Home = ({ data }) => {
  return (
    <ContentLayout>
      <SEO
        title="Handlebar Labs | Software & Information Product Development"
        description="Handlebar Labs builds software and information products."
      />

      <div className="prose prose-indigo prose-lg -mt-6 mb-12">
        <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
      </div>

      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Active Projects
      </h2>
      {data.products.edges.map(({ node }) => (
        <ProjectItem
          key={node.fields.slug}
          slug={node.fields.slug}
          imageUrl={node.frontmatter.logo.publicURL}
          name={node.frontmatter.name}
          caption={node.excerpt}
        />
      ))}
    </ContentLayout>
  );
};

export default Home;

export const query = graphql`
  query {
    content: markdownRemark(fileAbsolutePath: { regex: "/pages/index/g" }) {
      html
    }

    products: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "content/products/" }
        frontmatter: { status: { eq: "Active" } }
      }
      sort: { fields: frontmatter___updated, order: DESC }
    ) {
      edges {
        node {
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
