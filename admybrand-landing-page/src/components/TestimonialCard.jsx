import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ quote, author, title, image }) => {
  return (
    <div className="px-8 md:px-12 py-4">
      <div className="text-center flex flex-col items-center">
        {/* Quote Icon */}
        <FaQuoteLeft className="text-indigo-400 text-3xl mb-4" />

        {/* Quote Text */}
        <p className="leading-relaxed text-lg text-gray-300 mb-6 max-w-2xl">
          {quote}
        </p>

        {/* Author Avatar */}
        <div className="w-32 h-32 mb-4 flex-shrink-0">
          <img
            alt={author}
            className="w-full h-full object-cover rounded-full border-2 border-white"
            src={image}
            loading="lazy"
          />
        </div>

        {/* Author Name & Title */}
        <h2 className="text-white font-bold title-font tracking-wider text-lg">
          {author}
        </h2>
        <p className="text-gray-500 mb-8">{title}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
