import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Dumbbell, Microscope, Music, Globe, Code } from 'lucide-react';
import { CategoryCard } from './CategoryCard';
import { Button } from '../ui/Button';
import { useToastStore } from '../../store/toastStore';
import { MatchmakingScreen } from '../matchmaking/MatchmakingScreen';

const categories = [
  { id: 'general', name: 'General Knowledge', icon: Brain, description: 'Test your knowledge across various topics' },
  { id: 'sports', name: 'Sports & Fitness', icon: Dumbbell, description: 'Questions about athletics and physical activities' },
  { id: 'science', name: 'Science', icon: Microscope, description: 'Explore the world of science and technology' },
  { id: 'music', name: 'Music', icon: Music, description: 'Test your musical knowledge' },
  { id: 'geography', name: 'Geography', icon: Globe, description: 'Questions about countries and cultures' },
  { id: 'programming', name: 'Programming', icon: Code, description: 'Test your coding knowledge' },
];

export const CategorySelection: React.FC = () => {
  const { addToast } = useToastStore();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isMatchmaking, setIsMatchmaking] = useState(false);

  const handleStartGame = () => {
    if (!selectedCategory) {
      addToast('Please select a category first', 'error');
      return;
    }
    setIsMatchmaking(true);
  };

  if (isMatchmaking && selectedCategory) {
    return <MatchmakingScreen category={selectedCategory} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Choose Your Category</h2>
        <p className="mt-2 text-gray-600">Select a category to start the quiz battle</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            icon={category.icon}
            title={category.name}
            description={category.description}
            isSelected={selectedCategory === category.id}
            onClick={() => setSelectedCategory(category.id)}
          />
        ))}
      </div>

      <div className="flex justify-center pt-6">
        <Button
          onClick={handleStartGame}
          disabled={!selectedCategory}
          className="px-8 py-3 text-lg"
        >
          Find Opponent
        </Button>
      </div>
    </motion.div>
  );
};