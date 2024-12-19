import { GameHistory, Player } from '../types/game';

export const mockOnlinePlayers: Player[] = [
  { id: '2', name: 'Alice', score: 0, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alice' },
  { id: '3', name: 'Bob', score: 0, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=bob' },
  { id: '4', name: 'Charlie', score: 0, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=charlie' },
];

export const mockGameHistory: GameHistory[] = [
  {
    id: '1',
    date: '2024-02-28',
    category: 'Sports',
    score: 50,
    opponent: 'Alice',
    won: true,
  },
  {
    id: '2',
    date: '2024-02-27',
    category: 'Science',
    score: 30,
    opponent: 'AI Agent',
    won: false,
  },
];

export const findMatch = async (userId: string): Promise<Player> => {
  // Simulate network delay (3 seconds)
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  // Always return AI Agent for now
  return {
    id: 'ai',
    name: 'AI Agent',
    score: Math.floor(Math.random() * 40), // Random score to make it more interesting
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ai'
  };
};