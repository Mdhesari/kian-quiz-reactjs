import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Dumbbell, Trophy, Timer } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Challenge Your Mind with</span>
                <span className="block text-indigo-600">KianQuiz</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                Compete with players worldwide in real-time quiz battles. Test your knowledge, earn points, and become the ultimate quiz champion!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
              {[
                { icon: Brain, title: 'Knowledge Tests', description: 'Diverse categories of questions' },
                { icon: Dumbbell, title: 'Sports', description: 'Real-time competitions' },
                { icon: Timer, title: 'Time Challenge', description: 'Think fast under pressure' },
                { icon: Trophy, title: 'Leaderboards', description: 'Compete for top rankings' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-white rounded-xl shadow-md"
                >
                  <feature.icon className="h-8 w-8 text-indigo-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-500">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};