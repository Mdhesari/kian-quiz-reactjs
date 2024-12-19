import React from 'react';
import { Question } from '../../types/game';
import { Button } from '../ui/Button';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: number) => void;
  timeLeft: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
  timeLeft,
}) => {
  return (
    <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">{question.text}</h2>
        <span className="text-2xl font-bold text-indigo-600">{timeLeft}s</span>
      </div>
      
      <div className="grid grid-cols-1 gap-4 mt-6">
        {question.options.map((option, index) => (
          <Button
            key={index}
            onClick={() => onAnswer(index)}
            variant="secondary"
            className="text-left py-4"
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};