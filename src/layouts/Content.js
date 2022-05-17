import React from 'react';

import { Navbar } from '../components/Navbar';

const Content = ({ children, leftContent = null, rightContent = null }) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        <div className="flex-1 invisible lg:visible">{leftContent}</div>
        <div className="container px-6 lg:px-10 max-w-screen-lg mb-48 flex-0">
          {children}
        </div>
        <div className="flex-1 invisible lg:visible">{rightContent}</div>
      </div>
    </>
  );
};

export default Content;
