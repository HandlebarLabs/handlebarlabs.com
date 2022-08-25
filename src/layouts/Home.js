import React from 'react';

import { Navbar } from '../components/Navbar';

const Home = ({ children }) => {
  return (
    <>
      <div className="container px-6 lg:px-10 mt-6 max-w-screen-lg mx-auto mb-8">
        <Navbar />
      </div>
      <div className="container px-6 lg:px-10 max-w-screen-lg mb-48 flex-0 mx-auto">
        {children}
      </div>
      <footer className="bg-emerald-500 text-white">
        <div className="py-8 px-6 lg:px-10 max-w-screen-lg mx-auto">
          <p className="italic">Handlebar Labs, LLC</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
