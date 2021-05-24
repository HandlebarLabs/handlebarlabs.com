import React from 'react';
import { graphql } from 'gatsby';
import { groupBy } from 'lodash';

import ContentLayout from '../layouts/Content';
import ProjectItem from '../components/ProjectItem';

const DataGroup = ({ title, data = [] }) => (
  <div className="mb-20">
    <h2 className="text-3xl font-semibold mb-6 text-gray-800">{title}</h2>

    {data.map(({ node }) => (
      <ProjectItem
        key={node.fields.slug}
        slug={node.fields.slug}
        imageUrl={node.frontmatter.logo.publicURL}
        name={node.frontmatter.name}
        caption={node.excerpt}
      />
    ))}
  </div>
);

const Projects = ({ data }) => {
  const groups = groupBy(
    data.products.edges,
    ({ node }) => node.frontmatter.status,
  );

  return (
    <ContentLayout>
      <DataGroup title="Active Projects" data={groups.Active} />
      <DataGroup title="Projects on Hold" data={groups.Hold} />
      <DataGroup title="Sunset Projects" data={groups.Sunset} />
    </ContentLayout>
  );
};

export default Projects;

// TODO: just get active projects
export const query = graphql`
  query {
    products: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "content/products/" } }
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
