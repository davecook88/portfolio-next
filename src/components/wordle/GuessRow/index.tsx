import { FC, useCallback } from 'react';

import { GuessRowProps } from '@/components/wordle/GuessRow/types';
import { LetterBox } from '@/components/wordle/LetterBox';

export const GuessRow: FC<GuessRowProps> = ({
  guess,
  active,
  getClue,
  setClue,
}) => {
  const _getClue = useCallback(
    (letterGuess: Letter) => {
      return getClue(letterGuess);
    },
    [getClue]
  );
  return (
    <div className='flex flex-row gap-1 p-2'>
      {[...Array(5).keys()].map((x) => {
        const letterGuess = guess?.[x];
        return (
          <LetterBox
            key={x}
            letter={letterGuess}
            index={x}
            activeGuess={active}
            clue={letterGuess ? _getClue(letterGuess) : undefined}
            setLetterClue={letterGuess ? setClue(letterGuess) : undefined}
          />
        );
      })}
    </div>
  );
};
