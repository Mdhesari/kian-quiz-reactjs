import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

export const MatchFoundAnimation: React.FC = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <Trophy className="w-16 h-16 text-yellow-500" />
      </motion.div>
      
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [1, 1.5],
          opacity: [0.3, 0]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop"
        }}
        className="absolute inset-0 bg-yellow-200 rounded-full"
      />
    </div>
  );
};