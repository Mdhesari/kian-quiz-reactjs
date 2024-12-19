import { Question } from '../types/game';

const questionsByCategory: Record<string, Question[]> = {
  general: [
    {
      id: '1',
      text: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Paris', 'Madrid'],
      correctAnswer: 2,
      category: 'general'
    },
    {
      id: '2',
      text: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 1,
      category: 'general'
    }
  ],
  sports: [
    {
      id: '3',
      text: 'Which sport has the most worldwide participants?',
      options: ['Swimming', 'Running', 'Cycling', 'Walking'],
      correctAnswer: 1,
      category: 'sports'
    },
    {
      id: '4',
      text: 'In which Olympic sport would you perform a clean and jerk?',
      options: ['Gymnastics', 'Weightlifting', 'Wrestling', 'Boxing'],
      correctAnswer: 1,
      category: 'sports'
    }
  ],
  science: [
    {
      id: '5',
      text: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Fe', 'Cu'],
      correctAnswer: 0,
      category: 'science'
    },
    {
      id: '6',
      text: 'What is the hardest natural substance on Earth?',
      options: ['Gold', 'Iron', 'Diamond', 'Platinum'],
      correctAnswer: 2,
      category: 'science'
    }
  ]
};

export const generateQuestions = (count: number, category: string): Question[] => {
  const questions = questionsByCategory[category] || questionsByCategory.general;
  return questions.slice(0, count);
};