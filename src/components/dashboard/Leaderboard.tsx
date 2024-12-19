import React from 'react';
import { Trophy, Medal } from 'lucide-react';
import { mockOnlinePlayers } from '../../utils/mockApi';

export const Leaderboard: React.FC = () => {
  const topPlayers = [...mockOnlinePlayers]
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      <div className="space-y-4">
        {topPlayers.map((player, index) => (
          <div
            key={player.id}
            className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg"
          >
            <div className="w-8 text-center">
              {index === 0 ? (
                <Trophy className="w-6 h-6 text-yellow-500" />
              ) : (
                <Medal className="w-6 h-6 text-gray-400" />
              )}
            </div>
            <img
              src={player.avatar}
              alt={player.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <span className="font-medium">{player.name}</span>
              <p className="text-sm text-gray-500">{player.score} pts</p>
            </div>
            <span className="text-lg font-bold">#{index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};