import { useCallback, useEffect, useMemo } from 'react';

import { GUESSES_COUNT, WORD_LENGTH } from '@/components/wordle/constants/game';
import { LETTER_STATUS } from '@/components/wordle/constants/letterStatus';
import { GuessRow } from '@/components/wordle/GuessRow';
import { useWordleClues } from '@/components/wordle/hook/useWordleClues';
import { useWordleGuesses } from '@/components/wordle/hook/useWordleGuesses';
import { SuggestionsList } from '@/components/wordle/SuggestionsList';

const WordleGame = () => {
  const { getClue, setClue, suggestions, resetClues } = useWordleClues();
  const {
    guesses,
    addGuessLetter,
    removeGuessLetter,
    addGuess,
    currentGuess,
    resetGuesses,
  } = useWordleGuesses();

  const guessCount = useMemo(() => guesses.length, [guesses]);
  const filteredSuggestions = useMemo(() => {
    const previousGuessesSet = new Set(
      guesses
        .slice(0, guesses.length - 1)
        .map((guess) => guess.join('').toLowerCase())
    );
    return suggestions
      .slice(0, 20)
      .filter((word) => !previousGuessesSet.has(word.string))
      .slice(0, 10);
  }, [guessCount, suggestions]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setUnknownLetters = () => {
    const previousGuesses = guesses.slice(0, guesses.length);
    previousGuesses.forEach((guess) => {
      guess.forEach((letter) => {
        const currentClue = getClue(letter);
        if (currentClue.status === LETTER_STATUS.UNKNOWN) {
          setClue(letter)({
            index: null,
            status: LETTER_STATUS.NOT_IN_WORD,
            notIndex: null,
          });
        }
      });
    });
  };

  const onGuessClick = useCallback(() => {
    if (!currentGuess || currentGuess.length !== WORD_LENGTH) {
      return onWordTooShort();
    }
    addGuess();
    setUnknownLetters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <div className='m-auto w-max'>
        <div className='m-auto w-max p-2'>
          <button
            className='btn-warning btn'
            onClick={(e) => {
              e.preventDefault();
              resetClues();
              resetGuesses();
            }}
          >
            Reset
          </button>
        </div>
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
      <div className='m-auto flex justify-center'>
        <SuggestionsList words={filteredSuggestions} />
      </div>
    </div>
  );
};
export default WordleGame;
