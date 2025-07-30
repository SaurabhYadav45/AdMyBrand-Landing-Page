import React, { useState } from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import Modal from '../components/Modal';
import ContactForm from './ContactForm';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isContactOpen, setIsContactOpen] = useState(false);

// Handle sumbit to subscribe 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage('Email is required.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      setMessage('Submitting...');
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || 'An error occurred. Please try again.');
      }
    } catch {
      setMessage('Failed to connect to the server. Please try again later.');
    }
  };

  return (
    <footer className="text-gray-400">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Company Info */}
          <div>
            <a href="#" className="text-2xl font-bold text-white">ADmyBRAND AI</a>
            <p className="max-w-sm mt-2">
              The future of marketing automation for ambitious agencies.
            </p>
            {/* Contact Us Button */}
            <button
              onClick={() => setIsContactOpen(true)}
              className="mt-4 text-base text-indigo-400 hover:underline"
            >
              Contact Us
            </button>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white uppercase font-semibold">Product</h3>
            <a href="#" className="block mt-2 text-sm hover:text-indigo-400">Features</a>
            <a href="#" className="block mt-2 text-sm hover:text-indigo-400">Pricing</a>
            <a href="#" className="block mt-2 text-sm hover:text-indigo-400">Testimonials</a>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white uppercase font-semibold">Company</h3>
            <a href="#" className="block mt-2 text-sm hover:text-indigo-400">About us</a>
            <a href="#" className="block mt-2 text-sm hover:text-indigo-400">Blog</a>
            <a
              onClick={() => setIsContactOpen(true)}
              className="block mt-2 text-sm hover:text-indigo-400 cursor-pointer"
            >
              Contact
            </a>
          </div>

          {/* Newsletter Form */}
          <div>
            <h3 className="text-white uppercase font-semibold">Stay Updated</h3>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row mt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 text-gray-300 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 mt-2 sm:mt-0 sm:ml-2 text-sm font-medium tracking-wide text-white uppercase transform bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none"
                >
                  Subscribe
                </button>
              </div>
            </form>
            {message && <p className="text-sm mt-2">{message}</p>}
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        {/* Bottom Bar */}
        <div className="flex items-center justify-between">
          <p className="text-sm">&copy; {new Date().getFullYear()} ADmyBRAND Inc. All Rights Reserved.</p>
          <div className="flex -mx-2">
            <a href="#" className="mx-2 hover:text-indigo-400"><FaTwitter size={20} /></a>
            <a href="#" className="mx-2 hover:text-indigo-400"><FaGithub size={20} /></a>
            <a href="#" className="mx-2 hover:text-indigo-400"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <Modal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        title="Get in Touch"
      >
        <ContactForm />
      </Modal>
    </footer>
  );
};

export default Footer;
