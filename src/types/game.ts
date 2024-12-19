export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  category: string;
}

export interface Player {
  id: string;
  name: string;
  score: number;
  avatar: string;
}

export interface GameState {
  status: 'waiting' | 'playing' | 'finished';
  currentQuestion: number;
  players: Player[];
  questions: Question[];
  timePerQuestion: number;
  selectedCategory: string;
  rounds: number;
}

export interface GameHistory {
  id: string;
  date: string;
  category: string;
  score: number;
  opponent: string;
  won: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}