// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center py-12">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-gray-700">
          Hi, I'm John Doe, a passionate web developer with experience in building modern and responsive web applications. 
          I specialize in frontend technologies and have a keen eye for design.
        </p>
      </header>
      
      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          What I Do
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          I create beautiful, responsive, and user-friendly websites and applications. 
          Whether you need a personal blog, a business website, or a complex web application, 
          I am here to help bring your ideas to life.
        </p>
        <Link 
          to="/projects" 
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600"
        >
          View My Projects
        </Link>
      </section>
      
      <section className="text-center mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Interested in working together or just want to say hi? Feel free to reach out!
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600"
        >
          Contact Me
        </Link>
      </section>
    </div>
  );
};

export default Home;
