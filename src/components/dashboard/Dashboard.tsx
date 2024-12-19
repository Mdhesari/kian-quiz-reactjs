import React, { useState } from 'react';
import { CategorySelection } from '../game/CategorySelection';
import { GameHistory } from '../game/GameHistory';
import { OnlinePlayers } from './OnlinePlayers';
import { Leaderboard } from './Leaderboard';
import { motion } from 'framer-motion';

export const Dashboard: React.FC = () => {
  const [showCategorySelection, setShowCategorySelection] = useState(false);

  return (
    <div className="space-y-8">
      {showCategorySelection ? (
        <CategorySelection />
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-2 bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Challenge Your Mind?</h2>
              <p className="text-gray-600 mb-6">Test your knowledge against other players in real-time!</p>
              <button
                onClick={() => setShowCategorySelection(true)}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Start New Game
              </button>
            </div>
          </motion.div>
          
          <div className="space-y-6">
            <GameHistory />
          </div>
          <div className="space-y-6">
            <Leaderboard />
            <OnlinePlayers />
          </div>
        </motion.div>
      )}
    </div>
  );
};