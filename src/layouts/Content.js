import React from 'react';
import { Link } from 'gatsby';

import logo from '../../content/logos/handlebarlabs.png';

const Content = ({ children }) => {
  return (
    <>
      <div className="container mx-auto px-8 mt-6 max-w-screen-lg">
        <nav className="flex flex-row justify-between items-center mb-8">
          <Link to="/">
            <img
              className="w-12 h-12 rounded-full"
              src={logo}
              alt="Handlebar Labs Logo"
            />
          </Link>
          <ul>
            <li className="text-gray-500">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container mx-auto px-8 max-w-screen-md">{children}</div>
    </>
  );
};

export default Content;
