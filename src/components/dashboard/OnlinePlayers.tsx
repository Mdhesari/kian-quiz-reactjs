import React from 'react';
import { mockOnlinePlayers } from '../../utils/mockApi';

export const OnlinePlayers: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Online Players</h2>
      <div className="space-y-4">
        {mockOnlinePlayers.map((player) => (
          <div key={player.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
            <img src={player.avatar} alt={player.name} className="w-10 h-10 rounded-full" />
            <span className="font-medium">{player.name}</span>
            <span className="ml-auto flex h-2 w-2 rounded-full bg-green-400"></span>
          </div>
        ))}
      </div>
    </div>
  );
};