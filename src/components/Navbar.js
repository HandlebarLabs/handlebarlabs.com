import React from 'react';
import { Link } from 'gatsby';

import logo from '../../static/handlebarlabs.png';

const items = [
  // {
  //   title: 'PROJECTS',
  //   to: '/projects',
  // },
  {
    title: 'ARTICLES',
    to: '/blog',
  },
  {
    title: 'CONTACT',
    to: '/#contact',
    // TODO: make this a button
  },
];

export const Navbar = () => (
  <nav className="mb-7 flex flex-row justify-between items-center">
    <Link
      to="/"
      className="text-xl font-bold text-gray-800 flex flex-row justify-center items-center"
    >
      <img
        src={logo}
        className="w-12 h-12 rounded-full"
        alt="Handlebar Labs Logo"
      />
      <span className="hidden sm:block ml-2">Handlebar Labs</span>
    </Link>
    <ul className="flex flex-row">
      {items.map(i => (
        <li key={i.to} className="text-gray-500 py-3 pl-6 text-sm font-medium">
          <Link to={i.to}>{i.title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);
