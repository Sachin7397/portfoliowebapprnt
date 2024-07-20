// src/components/Project.js

import React from 'react';
import { projects } from '../data';

const Project = () => {
  return (
    <section id="projects" className="bg-gray-100 text-gray-800 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <h3 className="text-lg text-gray-600">{project.subtitle}</h3>
              <p className="text-gray-700 mt-2">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
