// src/components/Testimonial.js

import React from 'react';
import { testimonials } from '../data';

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">What Our Clients Say</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <blockquote className="text-center">
                <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                <cite className="font-semibold text-xl">{testimonial.name}</cite>
                <p className="text-gray-400">{testimonial.company}</p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
