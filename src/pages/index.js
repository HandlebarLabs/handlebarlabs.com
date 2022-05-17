import React from 'react';
import { graphql, Link } from 'gatsby';

import ContentLayout from '../layouts/Content';
import SEO from '../components/SEO';
import { Navbar } from '../components/Navbar';

const Button = ({ title, text }) => {
  // return (
  //   <Link to="/projects" className="flex flex-1 group">
  //     <div className="flex flex-1 flex-col h-60 transition-all group-hover:scale-105 group-hover:bg-sky-500 justify-center items-center rounded text-center px-4 py-2 mx-2 ring-1 ring-slate-900/5 hover:ring-sky-500">
  //       <h2 className="text-xl font-semibold text-slate-800 group-hover:scale-105 group-hover:text-white">
  //         {title}
  //       </h2>
  //       <p className="text-md group-hover:scale-105 group-hover:text-white">
  //         {text}
  //       </p>
  //     </div>
  //   </Link>
  // );

  return (
    <Link
      to="/projects"
      className="flex flex-1 flex-col group mx-4 rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
    >
      <h3 className="text-slate-900 group-hover:text-white text-xl font-semibold">
        {title}
      </h3>
      <p className="text-slate-500 group-hover:text-white text-md">{text}</p>
    </Link>
  );
};

const Home = ({ data }) => {
  return (
    <div className="min-h-screen flex flex-1 flex-col">
      <SEO
        title="Handlebar Labs | Steering Developers to Build Without the Handlebars"
        description="Software development services and education."
      />
      <Navbar />

      {/* <div className="mt-8 border-b-2 pb-10">
        <h1 className="text-gray-800 text-3xl font-bold tracking-wide">
          Steering Developers to Build Without the Handlebars
        </h1>
        <h2 className="text-gray-700 text-xl font-medium mt-2">
          Break the tutorial cycle and learn to solve problems on your own.
        </h2>
      </div> */}
      <div className="flex flex-1 justify-center items-center">
        <div className="flex flex-row">
          <Button
            title="Development Services"
            text="I need help building a software product."
          />
          <Button
            title="Learn Development"
            text="I want to learn how to solve problems with software."
          />
        </div>
      </div>
      {/* <div className="prose prose-indigo  prose-lg  mb-12">
        <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
      </div> */}
    </div>
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
