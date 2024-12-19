import React from 'react';
import { useGameStore } from '../../store/gameStore';
import { useNavigate } from 'react-router-dom';
import { Brain, Dumbbell, Microscope, Music, Globe, Code } from 'lucide-react';
import { findMatch } from '../../utils/mockApi';
import { useAuthStore } from '../../store/authStore';

const categories = [
  { id: 'general', name: 'General Knowledge', icon: Brain, description: 'Test your knowledge across various topics' },
  { id: 'sports', name: 'Sports & Fitness', icon: Dumbbell, description: 'Questions about athletics and physical activities' },
  { id: 'science', name: 'Science', icon: Microscope, description: 'Explore the world of science and technology' },
  { id: 'music', name: 'Music', icon: Music, description: 'Test your musical knowledge' },
  { id: 'geography', name: 'Geography', icon: Globe, description: 'Questions about countries and cultures' },
  { id: 'programming', name: 'Programming', icon: Code, description: 'Test your coding knowledge' },
];

export const CategorySelection: React.FC = () => {
  const { initGame, setCategory } = useGameStore();
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const handleCategorySelect = async (categoryId: string) => {
    setCategory(categoryId);
    const opponent = await findMatch(user!.id);
    initGame([
      { id: user!.id, name: user!.username, score: 0, avatar: user!.avatar },
      opponent
    ], categoryId);
    navigate('/game');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Select Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategorySelect(category.id)}
            className="p-4 border rounded-lg hover:bg-indigo-50 transition-colors flex items-center space-x-3"
          >
            <category.icon className="w-6 h-6 text-indigo-600" />
            <div className="text-left">
              <h3 className="font-semibold">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};