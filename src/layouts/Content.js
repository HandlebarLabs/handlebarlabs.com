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

const Content = ({ children, leftContent = null, rightContent = null }) => {
  return (
    <>
      <div className="container px-6 lg:px-10 mt-6 max-w-screen-md mx-auto">
        <nav className="mb-7">
          <Link to="/" className="text-3xl font-bold text-gray-800">
            <img
              src={logo}
              className="w-12 h-12 rounded-full mb-3"
              alt="Handlebar Labs Logo"
            />
            Handlebar Labs
          </Link>
          <ul className="flex flex-row mt-1">
            {items.map(i => (
              <li key={i.to} className="text-gray-500 py-3 pr-6 text-sm">
                <Link to={i.to}>{i.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex flex-row">
        <div className="flex-1 invisible lg:visible">{leftContent}</div>
        <div className="container px-6 lg:px-10 max-w-screen-md mb-48 flex-0">
          {children}
        </div>
        <div className="flex-1 invisible lg:visible">{rightContent}</div>
      </div>
    </>
  );
};

export default Content;
