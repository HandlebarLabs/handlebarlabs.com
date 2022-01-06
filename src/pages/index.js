import React from 'react';
import { graphql } from 'gatsby';

import ContentLayout from '../layouts/Content';
import SEO from '../components/SEO';

const Home = ({ data }) => {
  return (
    <ContentLayout>
      <SEO
        title="Handlebar Labs | Steering Developers to Build Without the Handlebars"
        description="Break the tutorial cycle and learn to solve problems on your own."
      />
      <div className="mt-8 border-b-2 pb-10">
        <h1 className="text-gray-800 text-3xl font-bold tracking-wide">
          Steering Developers to Build Without the Handlebars
        </h1>
        <h2 className="text-gray-700 text-xl font-medium mt-2">
          Break the tutorial cycle and learn to solve problems on your own.
        </h2>
      </div>
      <div className="prose prose-indigo  prose-lg  mb-12">
        <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
      </div>
    </ContentLayout>
  );
};

export default Home;

export const query = graphql`
  query {
    content: markdownRemark(fileAbsolutePath: { regex: "/pages/index/g" }) {
      html
    }
  }
`;
