import React from "react";
import { motion } from 'framer-motion';
import { FaChartLine, FaRobot, FaUsers, FaBullseye, FaMagic, FaCogs } from 'react-icons/fa';


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



const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex flex-col items-start p-6  backdrop-blur-lg rounded-xl shadow-lg border border-white/10 cursor-pointer h-full"
    >
      <div className="w-12 h-12 inline-flex items-center justify-center rounded-full  text-white mb-4 bg-indigo-500 ">
        {icon}
      </div>
      <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
      <p className="leading-relaxed text-gray-300">{description}</p>
    </motion.div>
  );
};

export default FeatureCard
