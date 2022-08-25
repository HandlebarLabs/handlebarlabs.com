import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import Header from '../components/Header';
import HeroHome from '../components/HeroHome';
import FeaturedWork from '../components/FeaturedWork';
// import FeaturesBlock from '../components/FeaturesBlock';
import AboutHBL from '../components/AboutHBL';
import Contact from '../components/Contact';

const Home = ({ data }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <SEO
        title="Building Products that Solve Problems"
        description="Handlebar Labs helps companies reach their goals with purpose built software."
      />

      <Header />

      <main className="flex-grow">
        <HeroHome />
        <FeaturedWork projects={data.content.frontmatter.products} />
        {/* <FeaturesBlock /> */}
        <AboutHBL />
        <div id="contact">
          <Contact />
        </div>

        <div className="flex h-40" />
      </main>
    </div>
  );
};

export default Home;

export const query = graphql`
  query {
    content: markdownRemark(fileAbsolutePath: { regex: "/pages/index/g" }) {
      html
      frontmatter {
        products {
          name
          description
          testimonial
          testimonialAuthor
          role
          company
          url
          logo {
            publicURL
          }
        }
      }
    }
  }
`;
