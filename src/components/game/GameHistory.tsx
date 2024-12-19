import React from 'react';
import { motion } from 'framer-motion';
import { GameHistoryCard } from './GameHistoryCard';
import { GameHistoryStats } from './GameHistoryStats';
import { mockGameHistory } from '../../utils/mockApi';
import { useAuthStore } from '../../store/authStore';

export const GameHistory: React.FC = () => {
  const { user } = useAuthStore();
  const games = mockGameHistory;

  const stats = {
    totalGames: games.length,
    wins: games.filter(game => game.won).length,
    averageScore: Math.round(games.reduce((acc, game) => acc + game.score, 0) / games.length),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <h2 className="text-2xl font-bold mb-6">Game History</h2>
      <GameHistoryStats stats={stats} />
      
      <div className="mt-6 space-y-4">
        {games.map((game) => (
          <GameHistoryCard key={game.id} game={game} />
        ))}
      </div>
    </motion.div>
  );
};