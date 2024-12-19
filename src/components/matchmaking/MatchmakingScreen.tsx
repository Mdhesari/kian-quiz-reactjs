import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search, Users, Zap, Brain } from 'lucide-react';
import { useGameStore } from '../../store/gameStore';
import { useAuthStore } from '../../store/authStore';
import { findMatch } from '../../utils/mockApi';
import { PlayerCard } from './PlayerCard';
import { MatchFoundAnimation } from './MatchFoundAnimation';
import { PulsatingRing } from './PulsatingRing';

export const MatchmakingScreen: React.FC<{ category: string }> = ({ category }) => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { initGame } = useGameStore();
  const [status, setStatus] = useState<'searching' | 'found' | 'starting'>('searching');
  const [opponent, setOpponent] = useState<any>(null);
  const [searchTime, setSearchTime] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const startMatchmaking = async () => {
      try {
        const foundOpponent = await findMatch(user!.id);
        setOpponent(foundOpponent);
        setStatus('found');
        
        // Add a slight delay before starting the game for dramatic effect
        setTimeout(() => {
          setStatus('starting');
          setTimeout(() => {
            initGame([
              { id: user!.id, name: user!.username, score: 0, avatar: user!.avatar },
              foundOpponent
            ], category);
            navigate('/game');
          }, 2000);
        }, 1500);
      } catch (error) {
        console.error('Matchmaking failed:', error);
      }
    };

    // Start search timer
    timer = setInterval(() => {
      setSearchTime(prev => prev + 1);
    }, 1000);

    startMatchmaking();

    return () => {
      clearInterval(timer);
    };
  }, [category, user, initGame, navigate]);

  return (
    <div className="min-h-[600px] flex flex-col items-center justify-center relative overflow-hidden">
      <AnimatePresence mode="wait">
        {status === 'searching' && (
          <motion.div
            key="searching"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center space-y-8"
          >
            <div className="relative">
              <PulsatingRing />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="relative z-10"
              >
                <Search className="w-16 h-16 text-indigo-600" />
              </motion.div>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-900">Finding Opponent</h2>
              <p className="text-gray-600">Searching for a worthy challenger...</p>
              <p className="text-sm text-gray-500">Time elapsed: {searchTime}s</p>
            </div>

            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {Math.floor(Math.random() * 50 + 100)} online
              </span>
              <span className="flex items-center">
                <Brain className="w-4 h-4 mr-1" />
                {category}
              </span>
              <span className="flex items-center">
                <Zap className="w-4 h-4 mr-1" />
                Fast matching
              </span>
            </div>
          </motion.div>
        )}

        {status === 'found' && (
          <motion.div
            key="found"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center space-y-8"
          >
            <MatchFoundAnimation />
            <div className="flex justify-center items-center space-x-8">
              <PlayerCard player={{ ...user!, isCurrentUser: true }} />
              <div className="text-2xl font-bold text-indigo-600">VS</div>
              <PlayerCard player={{ ...opponent, isOpponent: true }} />
            </div>
          </motion.div>
        )}

        {status === 'starting' && (
          <motion.div
            key="starting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl font-bold text-indigo-600">
              Game Starting...
            </h2>
            <p className="text-gray-600">Prepare yourself!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};