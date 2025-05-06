// components/ComingSoon.tsx
import React from "react";

const ComingSoon: React.FC = () => {
  return (
    <div className="bg-gradient-to-t dark:from-gray-700 dark:to-gray-800 from-sky-50 to-blue-50  ">
      <div className="py-10 flex flex-col justify-center items-center">
        <img src="/fix.svg" alt="Logo" className="mb-8 h-40" />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 dark:text-white mb-4">
          This page is under maintenance
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">
          We're working hard to improve the user experience. Stay tuned!
        </p>
        <div className="flex space-x-4">
          <a
            href="/contacts"
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Contact Us
          </a>
          <a
            href="/"
            className="border-2 border-gray-800 text-black font-bold py-3 px-6 rounded dark:text-white dark:border-white"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
