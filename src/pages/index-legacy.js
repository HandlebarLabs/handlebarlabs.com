/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import Layout from '../layouts/Home';

const Banner = () => {
  return (
    <section className="py-14 md:py-20 md:px-10 mt-16 mb-16 md:my-28 mx-2 bg-emerald-500 text-white rounded-sm -skew-y-3 scale-110">
      <div className="skew-y-3 px-6 md:w-3/4 mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 ">
          Building Products
          <br />
          that Solve Problems
        </h1>
        <p className="text-md font-medium">
          Handlebar Labs provides software strategy, management, and development
          services with a specialization in React Native.
        </p>
      </div>
    </section>
  );
};

// const CompanyBio = () => {
//   return (
//     <section className="text-center w-3/4 mx-auto mb-14">
//       <p className="font-semibold text-lg">
//         Handlebar Labs provides software strategy, management, and development
//         services with a specialization in React Native.
//       </p>
//     </section>
//   );
// };

const Products = ({ products = [] }) => {
  return (
    <section>
      {/* <h2 className="text-3xl font-semibold mb-10">Projects</h2> */}
      {products.map(product => {
        return (
          <div
            key={product.name}
            className="flex flex-col md:flex-row md:odd:flex-row-reverse items-start mb-20"
          >
            <div className="flex flex-col md:items-center md:justify-center w-full md:w-1/3">
              <img
                src={product.logo.publicURL}
                className="w-24 md:w-32 object-cover rounded-full"
                alt={`${product.name} Logo`}
              />
              <h3 className="text-xl font-semibold mt-4 md:text-center">
                {product.name}
              </h3>
            </div>
            <div className="flex-1 text-lg">
              {/* <p>{product.description}</p> */}
              <p className="mt-3 italic border-l-4 px-2 border-l-slate-200">
                {product.testimonial}
              </p>
              <p className="mt-3 ">{product.testimonialAuthor}</p>
              {product.role && product.company && (
                <p className="font-semibold">
                  {product.role}, {product.company}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

const AP = ({ children }) => <p className="mb-4">{children}</p>;

const About = () => {
  return (
    <section className="mx-auto text-lg mb-20">
      <h2 className="text-3xl font-semibold mb-6">About Handlebar Labs</h2>
      <AP>
        I'm{' '}
        <a
          href="https://twitter.com/spencer_carli"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500"
        >
          Spencer
        </a>
        , the person behind Handlebar Labs. I've been a freelance software
        developer for 8 years and currently live in the woods of Northwest
        Michigan overlooking a lake - my personal oasis.
      </AP>
      <AP>
        I've worked across the entire stack, with JavaScript, but in the past
        years, I've focused almost entirely on frontend development with a focus
        on building apps with React Native.
      </AP>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="mx-auto text-lg" id="contact">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>
      <AP>Interested in working together? Let's talk.</AP>
      <AP>
        Send an email to{' '}
        <a
          href="mailto:hello@handlebarlabs.com"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500"
        >
          hello@handlebarlabs.com
        </a>{' '}
        with an overview of your project.
      </AP>
    </section>
  );
};

const Home = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Building Products that Solve Problems"
        description="Handlebar Labs helps companies reach their goals with purpose built software."
      />
      <div className="text-gray-700">
        <Banner />
        {/* <CompanyBio /> */}
        <Products products={data?.content?.frontmatter?.products} />
        <About />
        <Contact />
      </div>
    </Layout>
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
          logo {
            publicURL
          }
        }
      }
    }
  }
`;
