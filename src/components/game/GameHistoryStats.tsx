import React from 'react';
import { Trophy, Hash, Percent } from 'lucide-react';

interface GameHistoryStatsProps {
  stats: {
    totalGames: number;
    wins: number;
    averageScore: number;
  };
}

export const GameHistoryStats: React.FC<GameHistoryStatsProps> = ({ stats }) => {
  const winRate = Math.round((stats.wins / stats.totalGames) * 100) || 0;

  return (
    <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
      <div className="text-center">
        <div className="flex justify-center mb-2">
          <Hash className="w-5 h-5 text-indigo-600" />
        </div>
        <div className="text-2xl font-bold text-gray-900">{stats.totalGames}</div>
        <div className="text-sm text-gray-500">Total Games</div>
      </div>
      
      <div className="text-center border-x border-gray-200">
        <div className="flex justify-center mb-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
        </div>
        <div className="text-2xl font-bold text-gray-900">{stats.wins}</div>
        <div className="text-sm text-gray-500">Wins</div>
      </div>
      
      <div className="text-center">
        <div className="flex justify-center mb-2">
          <Percent className="w-5 h-5 text-green-600" />
        </div>
        <div className="text-2xl font-bold text-gray-900">{winRate}%</div>
        <div className="text-sm text-gray-500">Win Rate</div>
      </div>
    </div>
  );
};