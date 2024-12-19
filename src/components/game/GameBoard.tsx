import React, { useEffect, useState } from 'react';
import { useGameStore } from '../../store/gameStore';
import { QuestionCard } from './QuestionCard';
import { PlayerScore } from './PlayerScore';
import { GameEndScreen } from './GameEndScreen';
import { useNavigate } from 'react-router-dom';
import { Trophy } from 'lucide-react';

export const GameBoard: React.FC = () => {
  const { 
    status,
    players,
    questions,
    currentQuestion,
    timePerQuestion,
    answerQuestion,
    nextQuestion,
    resetGame
  } = useGameStore();
  const [timeLeft, setTimeLeft] = useState(timePerQuestion);
  const navigate = useNavigate();

  useEffect(() => {
    if (status !== 'playing') return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          nextQuestion();
          return timePerQuestion;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [status, currentQuestion, timePerQuestion, nextQuestion]);

  if (status === 'waiting') {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-pulse">
            <Trophy className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Get Ready!</h2>
          <p className="text-gray-600">The game is about to start...</p>
        </div>
      </div>
    );
  }

  if (status === 'finished') {
    const winner = [...players].sort((a, b) => b.score - a.score)[0];
    const isUserWinner = winner.id === players[0].id;

    return (
      <GameEndScreen
        winner={winner}
        players={players}
        isUserWinner={isUserWinner}
        onPlayAgain={() => {
          resetGame();
          navigate('/');
          setTimeout(() => {
            const startButton = document.querySelector('[data-start-game]');
            if (startButton instanceof HTMLElement) {
              startButton.click();
            }
          }, 100);
        }}
        onBackToDashboard={() => {
          resetGame();
          navigate('/');
        }}
      />
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {players.map((player) => (
          <PlayerScore key={player.id} player={player} />
        ))}
      </div>

      <QuestionCard
        question={questions[currentQuestion]}
        onAnswer={(answer) => {
          answerQuestion(players[0].id, answer);
          nextQuestion();
          setTimeLeft(timePerQuestion);
        }}
        timeLeft={timeLeft}
      />
    </div>
  );
};