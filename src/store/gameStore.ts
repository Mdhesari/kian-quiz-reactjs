import { create } from 'zustand';
import { GameState, Player, Question } from '../types/game';
import { generateQuestions } from '../utils/questionGenerator';

interface GameStore extends GameState {
  initGame: (players: Player[], category: string) => void;
  answerQuestion: (playerId: string, answer: number) => void;
  nextQuestion: () => void;
  resetGame: () => void;
  setCategory: (category: string) => void;
}

export const useGameStore = create<GameStore>((set, get) => ({
  status: 'waiting',
  currentQuestion: 0,
  players: [],
  questions: [],
  timePerQuestion: 15,
  selectedCategory: '',
  rounds: 6,

  setCategory: (category) => {
    set({ selectedCategory: category });
  },

  initGame: (players, category) => {
    set({
      status: 'playing',
      players,
      questions: generateQuestions(get().rounds, category),
      currentQuestion: 0,
      selectedCategory: category
    });
  },

  answerQuestion: (playerId, answer) => {
    const { players, questions, currentQuestion } = get();
    const isCorrect = questions[currentQuestion].correctAnswer === answer;

    set({
      players: players.map(player =>
        player.id === playerId
          ? { ...player, score: player.score + (isCorrect ? 10 : 0) }
          : player
      )
    });
  },

  nextQuestion: () => {
    const { currentQuestion, questions } = get();
    if (currentQuestion + 1 >= questions.length) {
      set({ status: 'finished' });
    } else {
      set({ currentQuestion: currentQuestion + 1 });
    }
  },

  resetGame: () => {
    set({
      status: 'waiting',
      currentQuestion: 0,
      players: [],
      questions: [],
      selectedCategory: '',
    });
  },
}));