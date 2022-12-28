import { useCallback, useState } from 'react';

import { WORD_LENGTH } from '@/components/wordle/constants/game';

export const useWordleGuesses = () => {
  const [guesses, setGuesses] = useState<string[][]>([]);

  const resetGuesses = () => setGuesses([]);

  const currentGuess = guesses[guesses.length - 1] as string[];

  const addGuessLetter = useCallback(
    (letter: Letter) => {
      const existingGuesses = [...guesses];
      const currentGuess = existingGuesses.length
        ? existingGuesses.pop()
        : null;
      if ((currentGuess?.length || 0) >= WORD_LENGTH) return;
      if (letter.match(/W/)) return;
      const guess = currentGuess
        ? [...currentGuess, letter.toUpperCase()]
        : [letter.toUpperCase()];
      const updatedGuesses = [...existingGuesses, guess];

      setGuesses(updatedGuesses);
    },
    [setGuesses, guesses]
  );

  const removeGuessLetter = () => {
    if (currentGuess.length === 0) return;
    const guess = currentGuess.slice(0, currentGuess.length - 1);
    setGuesses([...guesses.slice(0, guesses.length - 1), guess]);
  };

  const addGuess = () => {
    setGuesses((prev) => [...prev, []]);
  };

  return {
    addGuessLetter,
    removeGuessLetter,
    guesses,
    addGuess,
    currentGuess,
    resetGuesses,
  };
};
