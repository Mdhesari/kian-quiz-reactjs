import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, X } from 'lucide-react';
import { GameHistory } from '../../types/game';
import { formatDate } from '../../utils/date';

interface GameHistoryCardProps {
  game: GameHistory;
}

export const GameHistoryCard: React.FC<GameHistoryCardProps> = ({ game }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`p-4 rounded-lg border ${
        game.won ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {game.won ? (
            <Trophy className="w-5 h-5 text-yellow-500" />
          ) : (
            <X className="w-5 h-5 text-red-500" />
          )}
          <div>
            <h3 className="font-semibold text-gray-900">
              vs {game.opponent}
            </h3>
            <p className="text-sm text-gray-500">
              {formatDate(game.date)} • {game.category}
            </p>
          </div>
        </div>
        <div className="text-right">
          <span className="font-bold text-lg">
            {game.score} pts
          </span>
        </div>
      </div>
    </motion.div>
  );
};