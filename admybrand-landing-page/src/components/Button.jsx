import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseStyles = "inline-flex items-center justify-center border-0 py-2 px-8 focus:outline-none rounded-lg text-lg font-semibold";

  const variantStyles = {
    primary: "bg-indigo-500 text-white",
    secondary: "bg-gray-800 text-gray-400"
  };

  return (
    <motion.button
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0px 5px 15px rgba(99, 102, 241, 0.4)" 
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;