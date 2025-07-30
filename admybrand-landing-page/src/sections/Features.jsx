import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaRobot, FaUsers, FaBullseye, FaMagic, FaCogs } from 'react-icons/fa';
import FeatureCard from '../components/FeatureCard';

// Animation variants for the container (the grid) and the items (the cards)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This will delay each child's animation by 0.2 seconds
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};


const Features = () => {
  const featureData = [
    {
      icon: <FaChartLine size={24} />,
      title: 'Predictive Analytics',
      description: 'Leverage AI to forecast marketing trends and campaign performance with high accuracy.',
    },
    {
      icon: <FaRobot size={24} />,
      title: 'AI-Powered Automation',
      description: 'Automate repetitive tasks like report generation and ad bidding to save time and reduce errors.',
    },
    {
      icon: <FaUsers size={24} />,
      title: 'Audience Segmentation',
      description: 'Automatically identify and group your most valuable customer segments for targeted campaigns.',
    },
    {
      icon: <FaBullseye size={24} />,
      title: 'Hyper-Personalization',
      description: 'Deliver unique ad creatives and messaging to individual users at scale.',
    },
    {
      icon: <FaMagic size={24} />,
      title: 'Content Generation',
      description: 'Instantly create compelling ad copy and headlines that convert.',
    },
    {
      icon: <FaCogs size={24} />,
      title: 'Seamless Integration',
      description: 'Connect with your existing marketing stack, from Google Ads to Facebook, in just a few clicks.',
    },
  ];

  return (
    // The bg-gray-900 class is removed to let the animated gradient show through.
    <section className="text-white py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="sm:text-4xl text-3xl font-bold text-white">One Platform, Endless Possibilities</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400">
            Our AI suite is designed to give your agency an unfair advantage.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featureData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Features;