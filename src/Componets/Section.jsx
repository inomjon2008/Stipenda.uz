import React from 'react';
import { motion } from 'framer-motion';

const Section = () => {
  return (
    <section className="px-4 py-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Text Section */}
        <motion.div
          className="lg:col-span-7 space-y-6"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Payments tool for software companies
          </h1>
          <p className="text-lg text-gray-600">
            From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
          </p>
          <button
            onClick={() => alert("Login form ochiladi")}
            className="inline-flex items-center px-6 py-3 text-white bg-blue-700 hover:bg-blue-800 rounded-xl font-medium shadow-md transition-all duration-300"
          >
            Get started
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="lg:col-span-5 flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <img
            src="https://stipendiya.edu.uz/_nuxt/img/info_section_logo.d752b88.png"
            alt="Section illustration"
            className="w-full max-w-md object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
