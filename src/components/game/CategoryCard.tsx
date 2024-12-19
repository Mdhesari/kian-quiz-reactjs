import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
  isSelected?: boolean;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  icon: Icon,
  title,
  description,
  onClick,
  isSelected,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        'w-full p-6 rounded-xl text-left transition-colors duration-200',
        'border-2 hover:border-indigo-400',
        isSelected
          ? 'border-indigo-600 bg-indigo-50'
          : 'border-gray-200 bg-white'
      )}
    >
      <div className="flex items-start space-x-4">
        <div className={cn(
          'p-3 rounded-lg',
          isSelected ? 'bg-indigo-100' : 'bg-gray-100'
        )}>
          <Icon className={cn(
            'w-6 h-6',
            isSelected ? 'text-indigo-600' : 'text-gray-600'
          )} />
        </div>
        <div>
          <h3 className={cn(
            'text-lg font-semibold',
            isSelected ? 'text-indigo-900' : 'text-gray-900'
          )}>
            {title}
          </h3>
          <p className={cn(
            'text-sm mt-1',
            isSelected ? 'text-indigo-600' : 'text-gray-500'
          )}>
            {description}
          </p>
        </div>
      </div>
    </motion.button>
  );
};