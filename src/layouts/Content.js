import React from 'react';

import { Navbar } from '../components/Navbar';

const Content = ({ children, leftContent = null, rightContent = null }) => {
  return (
    <>
      <div className="container px-6 lg:px-10 mt-6 max-w-screen-md mx-auto mb-8">
        <Navbar />
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
