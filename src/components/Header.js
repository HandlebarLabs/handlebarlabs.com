import React from 'react';
import { Link } from 'gatsby';

import logo from '../../static/handlebarlabs.png';

const Header = () => {
  return (
    <header className=" w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link
              to="/"
              className="text-xl font-bold text-gray-800 flex flex-row justify-center items-center"
              aria-label="Handlebar Labs"
            >
              <img
                src={logo}
                className="w-12 h-12 rounded-full"
                alt="Handlebar Labs Logo"
              />
              <span className="hidden sm:block ml-2">Handlebar Labs</span>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link
                  to="/blog"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  to="/#contact"
                  className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800"
                >
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
