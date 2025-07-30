import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import Button from './Button';
import Modal from './Modal';

// Pricing calculation helper
const calculatePrice = (tier, teamSize) => {
  if (tier.price === "Custom") return "Custom";

  const perUser = {
    Starter: 10,
    Pro: 20,
  };

  const basePrice = parseInt(tier.price.replace("$", ""));
  const total = basePrice + (teamSize * perUser[tier.name]);
  return `$${total}`;
};

const PricingCard = ({ tier, teamSize }) => {

  const name = tier.name
  const price = tier.price
  const features = tier.features
  const description = tier.description
  const isPopular = tier.isPopular

    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={`h-full p-8 rounded-lg border-2 ${
        isPopular ? 'border-indigo-500' : 'border-gray-600'
      } flex flex-col relative overflow-hidden cursor-pointer bg-gradient-to-br from-purple-500/20 to-indigo-500/20`}
    >
      {isPopular && (
        <span className="text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl bg-gradient-to-r from-indigo-500 to-purple-500">
          POPULAR
        </span>
      )}

      {/* Plan Name */}
      <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{name}</h2>

      {/* Price */}
      <h1 className="text-5xl text-white pb-4 mb-4 border-b border-gray-800 leading-none">
        {calculatePrice(tier, teamSize)}
        {name !== 'Enterprise' && (
          <span className="text-lg ml-1 font-normal text-gray-400">/mo</span>
        )}
      </h1>

      {/* Description */}
      <p className="flex items-center text-gray-400 mb-2">{description}</p>

      {/* Features List */}
      {features?.map((feature, index) => (
        <p key={index} className="flex items-center text-gray-400 mb-2">
          <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-500 text-white rounded-full flex-shrink-0">
            <FaCheckCircle size={10} />
          </span>
          {feature}
        </p>
      ))}

      {/* Button */}
      <div className="mt-auto">
        <Button 
        variant={isPopular ? 'primary' : 'secondary'} 
        className="w-full mt-6"
        onClick={() => setIsModalOpen(true)}>
            {name === 'Enterprise' ? 'Contact Us' : 'Choose Plan'}
        </Button>
      </div>
    </motion.div>
    {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`${name} Plan Details`}
      >
        <p className="mb-4 text-gray-300">{description}</p>
        <ul className="list-disc pl-6 text-gray-300">
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
        <Button
          variant="primary"
          className="mt-6 w-full"
          onClick={() => alert(`Selected: ${name}`)}
        >
          Get Started
        </Button>
      </Modal>
      </>
  );
};

export default PricingCard;
