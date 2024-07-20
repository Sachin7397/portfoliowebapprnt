import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data).toString(),
      });
console.log(response)
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      alert('An error occurred while sending the message.');
    }
  };

  return (
    <section id="contact" className="bg-gray-200 text-gray-800 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true"
          onSubmit={handleSubmit} 
          className="space-y-4"
        >
          <input 
            type="hidden" 
            name="form-name" 
            value="contact" 
          />
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Your Name" 
              required 
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Your Email" 
              required 
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
            <textarea 
              name="message" 
              id="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Your Message" 
              required 
              className="w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <div data-netlify-recaptcha="true"></div>
          <button 
            type="submit" 
            className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
