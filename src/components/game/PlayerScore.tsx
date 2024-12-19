import React from 'react';
import { Player } from '../../types/game';
import { Trophy } from 'lucide-react';

interface PlayerScoreProps {
  player: Player;
  isWinner?: boolean;
}

export const PlayerScore: React.FC<PlayerScoreProps> = ({ player, isWinner }) => {
  return (
    <div className={`flex items-center space-x-4 p-4 rounded-lg ${
      isWinner ? 'bg-indigo-100' : 'bg-gray-100'
    }`}>
      <img
        src={player.avatar}
        alt={player.name}
        className="w-12 h-12 rounded-full"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{player.name}</h3>
        <p className="text-gray-600">Score: {player.score}</p>
      </div>
      {isWinner && (
        <Trophy className="w-6 h-6 text-yellow-500" />
      )}
    </div>
  );
};