import React from 'react';

const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500">
        <div className="max-w-6xl mx-auto py-8 px-4 flex flex-col items-center">
          <div className="flex flex-wrap justify-center">
            <a href="#" className="text-white hover:text-gray-300 py-2 px-4">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300 py-2 px-4">
              About
            </a>
            <a href="#" className="text-white hover:text-gray-300 py-2 px-4">
              Alumni Directory
            </a>
            <a href="#" className="text-white hover:text-gray-300 py-2 px-4">
              Contact
            </a>
          </div>
          <div className="mt-4">
            <p className="text-white text-sm">
              &copy; {new Date().getFullYear()} Alumni Network. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;