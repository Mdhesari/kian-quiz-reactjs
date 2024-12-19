import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, PartyPopper, XCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Player } from '../../types/game';
import confetti from 'canvas-confetti';

interface GameEndScreenProps {
  winner: Player;
  players: Player[];
  onPlayAgain: () => void;
  onBackToDashboard: () => void;
  isUserWinner: boolean;
}

export const GameEndScreen: React.FC<GameEndScreenProps> = ({
  winner,
  players,
  onPlayAgain,
  onBackToDashboard,
  isUserWinner,
}) => {
  useEffect(() => {
    if (isUserWinner) {
      // Victory celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      // Losing animation - subtle particle effect
      confetti({
        particleCount: 30,
        spread: 50,
        colors: ['#666'],
        gravity: 2,
        origin: { y: 0.6 }
      });
    }
  }, [isUserWinner]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="flex flex-col items-center space-y-4"
      >
        {isUserWinner ? (
          <>
            <div className="relative">
              <Trophy className="w-24 h-24 text-yellow-500" />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -right-4 -top-4"
              >
                <PartyPopper className="w-8 h-8 text-indigo-600" />
              </motion.div>
            </div>
            <div className="flex space-x-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <Star className="w-8 h-8 text-yellow-500" />
                </motion.div>
              ))}
            </div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-4xl font-bold text-indigo-600"
            >
              Congratulations!
            </motion.h1>
          </>
        ) : (
          <>
            <div className="relative">
              <XCircle className="w-24 h-24 text-red-400" />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -right-4 -top-4"
              >
                <Award className="w-8 h-8 text-indigo-600" />
              </motion.div>
            </div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-4xl font-bold text-red-600"
            >
              Good Try!
            </motion.h1>
          </>
        )}
        
        <p className="text-xl text-gray-600">
          {isUserWinner ? "You're the Quiz Champion!" : "Better luck next time!"}
        </p>
        <p className="text-lg text-gray-500">Final Score: {winner.score} points</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {players.map((player) => (
          <motion.div
            key={player.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex items-center space-x-4 p-4 rounded-lg ${
              player.id === winner.id ? 'bg-indigo-100' : 'bg-gray-100'
            }`}
          >
            <img
              src={player.avatar}
              alt={player.name}
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{player.name}</h3>
              <p className="text-gray-600">Score: {player.score}</p>
            </div>
            {player.id === winner.id && (
              <Trophy className="w-6 h-6 text-yellow-500" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center space-x-4">
        <Button
          onClick={onBackToDashboard}
          className="px-6"
        >
          Back to Dashboard
        </Button>
        <Button
          onClick={onPlayAgain}
          variant="secondary"
          className="px-6"
        >
          Play Again
        </Button>
      </div>
    </motion.div>
  );
};