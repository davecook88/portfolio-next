import clsx from 'clsx';
import { FC } from 'react';

import { LETTER_STATUS } from '@/components/wordle/constants/letterStatus';
import { LetterBoxProps } from '@/components/wordle/LetterBox/types';

export const LetterBox: FC<LetterBoxProps> = ({
  letter = '',
  index,
  clue,
  setLetterClue,
  activeGuess,
}) => {
  const clickHandler = () => {
    if (!letter || !clue || !setLetterClue) return;
    if (!clue) {
      return setLetterClue({ status: LETTER_STATUS.IN_WORD, index: null });
    }
    switch (clue.status) {
      case LETTER_STATUS.NOT_IN_WORD:
        return setLetterClue({ status: LETTER_STATUS.IN_WORD, index: null });
      case LETTER_STATUS.UNKNOWN:
        return setLetterClue({ status: LETTER_STATUS.IN_WORD, index: null });
      case LETTER_STATUS.IN_WORD:
        return setLetterClue({
          status: LETTER_STATUS.INDEX_KNOWN,
          index,
        });
      case LETTER_STATUS.INDEX_KNOWN:
        return setLetterClue({
          status: activeGuess
            ? LETTER_STATUS.UNKNOWN
            : LETTER_STATUS.NOT_IN_WORD,
          index: null,
        });
    }
  };

  return (
    <div
      className={clsx(
        'm-1 cursor-pointer border border-white',
        activeGuess && 'bg-white text-black'
      )}
      onClick={(e) => {
        e.preventDefault();
        clickHandler();
      }}
    >
      <div
        className={clsx(
          'flex  h-8 w-8 select-none items-center justify-center bg-transparent text-center',

          clue?.status === LETTER_STATUS.INDEX_KNOWN && clue?.index === index
            ? 'bg-success'
            : clue?.status === LETTER_STATUS.IN_WORD ||
              clue?.status === LETTER_STATUS.INDEX_KNOWN
            ? 'bg-warning'
            : null
        )}
      >
        <div>{letter}</div>
      </div>
    </div>
  );
};
