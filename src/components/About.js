// src/components/About.js

import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          About Me
        </h1>
        <p className="text-lg text-gray-700">
          I’m John Doe, a passionate web developer with a love for crafting elegant and functional user experiences.
        </p>
      </header>

      <section className="w-full max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          My Journey
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          My journey into web development began with a curiosity about how websites work. Over the years, I have honed my skills in various technologies, including JavaScript, React, and Node.js. 
          I believe in continuous learning and strive to stay updated with the latest trends and best practices in the industry.
        </p>
      </section>

      <section className="w-full max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Skills
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>JavaScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>GraphQL</li>
          <li>Material UI</li>
        </ul>
      </section>

      <section className="w-full max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Experience
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          With over 5 years of experience in web development, I have worked on various projects, ranging from small personal blogs to large-scale web applications. 
          My experience includes working with cross-functional teams to deliver high-quality software solutions that meet client needs.
        </p>
      </section>

      <footer className="text-center mt-12">
        <p className="text-lg text-gray-700">
          When I’m not coding, you can find me exploring new technologies, reading tech blogs, or enjoying outdoor activities.
        </p>
      </footer>
    </div>
  );
};

export default About;
