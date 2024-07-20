// src/components/Skills.js

import React from 'react';
import { skills } from '../data';

const Skills = () => {
  return (
    <section id="skills" className="bg-white text-gray-800 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Skills</h1>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
