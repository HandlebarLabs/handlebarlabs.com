import React from 'react';
import { Link } from 'gatsby';

import logo from '../../content/logos/handlebarlabs.png';

const items = [
  {
    title: 'PROJECTS',
    to: '/projects',
  },
  {
    title: 'BLOG',
    to: '/blog',
  },
];

const Content = ({ children }) => {
  return (
    <>
      <div className="container px-6 lg:px-20 mt-6 max-w-screen-md mx-auto">
        <nav className="mb-10">
          <Link to="/" className="text-3xl font-bold text-gray-800">
            <img
              src={logo}
              className="w-12 h-12 rounded-full mb-5"
              alt="Handlebar Labs Logo"
            />
            Handlebar Labs
          </Link>
          <ul className="flex flex-row mt-3">
            {items.map(i => (
              <li key={i.to} className="text-gray-500 mr-6 text-sm">
                <Link to={i.to}>{i.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="container px-6 lg:px-20 max-w-screen-md mx-auto mb-48">
        {children}
      </div>
    </>
  );
};

export default Content;
