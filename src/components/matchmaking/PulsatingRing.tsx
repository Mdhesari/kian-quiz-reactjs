import React from 'react';
import { motion } from 'framer-motion';

export const PulsatingRing: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0.2, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute w-24 h-24 border-4 border-indigo-200 rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 2],
          opacity: [0.3, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
        className="absolute w-24 h-24 border-4 border-indigo-100 rounded-full"
      />
    </div>
  );
};