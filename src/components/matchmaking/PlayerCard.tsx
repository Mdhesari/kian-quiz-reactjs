import React from 'react';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

interface PlayerCardProps {
  player: {
    avatar: string;
    username: string;
    isCurrentUser?: boolean;
    isOpponent?: boolean;
  };
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-3"
    >
      <div className="relative">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src={player.avatar}
            alt={player.username}
            className="w-full h-full object-cover"
          />
        </div>
        {player.isCurrentUser && (
          <div className="absolute -top-2 -right-2">
            <Crown className="w-6 h-6 text-yellow-500" />
          </div>
        )}
      </div>
      <div>
        <h3 className="font-bold text-gray-900">{player.username}</h3>
        <p className="text-sm text-gray-500">
          {player.isCurrentUser ? 'You' : 'Opponent'}
        </p>
      </div>
    </motion.div>
  );
};