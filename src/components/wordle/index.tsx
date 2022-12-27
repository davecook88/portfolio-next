import { useCallback, useEffect } from 'react';

import { GUESSES_COUNT, WORD_LENGTH } from '@/components/wordle/constants/game';
import { GuessRow } from '@/components/wordle/GuessRow';
import { useWordleClues } from '@/components/wordle/hook/useWordleClues';
import { useWordleGuesses } from '@/components/wordle/hook/useWordleGuesses';
import { SuggestionsList } from '@/components/wordle/SuggestionsList';

const WordleGame = () => {
  const { getClue, setClue, suggestions } = useWordleClues();
  const { guesses, addGuessLetter, removeGuessLetter, addGuess, currentGuess } =
    useWordleGuesses();

  const onGuessClick = useCallback(() => {
    if (!currentGuess || currentGuess.length !== WORD_LENGTH) {
      return onWordTooShort();
    }
    addGuess();
  }, [addGuess, currentGuess]);

  const onKeyDownEventListener = useCallback(
    (e: KeyboardEvent) => {
      e.preventDefault();
      switch (e.key) {
        case 'Backspace':
          removeGuessLetter();
          return;
        case 'Enter':
          return onGuessClick();
        default:
          if (e.key.length === 1 && e.key.match(/\w/i)) addGuessLetter(e.key);
          return;
      }
    },
    [addGuessLetter, removeGuessLetter, onGuessClick]
  );

  useEffect(() => {
    if (!window) return;
    window.addEventListener('keydown', onKeyDownEventListener);
    return () => window.removeEventListener('keydown', onKeyDownEventListener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onKeyDownEventListener]);

  const onWordTooShort = () => {
    alert('Word too short');
  };

  return (
    <div className='container mt-12'>
      <div className='flex justify-center'>
        <div>
          {[...Array(GUESSES_COUNT).keys()].map((i) => (
            <GuessRow
              key={i}
              guess={guesses?.[i]}
              active={i === guesses.length - 1}
              getClue={getClue}
              setClue={setClue}
            />
          ))}
        </div>
      </div>
      <div className='flex justify-center p-2'>
        <button
          className='btn-primary btn'
          onClick={(e) => {
            e.preventDefault();
            onGuessClick();
          }}
        >
          Guess
        </button>
      </div>
      <div>
        <SuggestionsList words={suggestions.slice(0, 5)} />
      </div>
    </div>
  );
};
export default WordleGame;
