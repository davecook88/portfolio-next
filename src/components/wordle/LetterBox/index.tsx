import clsx from 'clsx';
import { FC, useContext } from 'react';

import { WordleClueContext } from '@/components/wordle';
import { LETTER_STATUS } from '@/components/wordle/constants/letterStatus';
import { LetterBoxProps } from '@/components/wordle/LetterBox/types';

export const LetterBox: FC<LetterBoxProps> = ({ letter = '', index }) => {
  const context = useContext(WordleClueContext);

  if (!context) return null;
  const { getClue, setClue } = context;
  const setLetterClue = setClue(letter);

  const clueState = getClue(letter);
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const clickHandler = () => {
    console.log({ clueState });
    if (!clueState) {
      return setLetterClue({ status: LETTER_STATUS.IN_WORD, index: null });
    }
    switch (clueState.status) {
      case LETTER_STATUS.UNKNOWN:
        return setLetterClue({ status: LETTER_STATUS.IN_WORD, index: null });
      case LETTER_STATUS.IN_WORD:
        return setLetterClue({
          status: LETTER_STATUS.INDEX_KNOWN,
          index,
        });
      case LETTER_STATUS.INDEX_KNOWN:
        return setLetterClue({ status: LETTER_STATUS.UNKNOWN, index: null });
    }
  };

  return (
    <div
      className='cursor-pointer border border-white'
      onClick={(e) => {
        e.preventDefault();
        clickHandler();
      }}
    >
      <div
        className={clsx(
          'flex h-8 w-8 select-none items-center justify-center bg-transparent text-center	',

          clueState?.status === LETTER_STATUS.INDEX_KNOWN &&
            clueState?.index === index &&
            'bg-success',
          (clueState?.status === LETTER_STATUS.IN_WORD ||
            clueState?.status === LETTER_STATUS.INDEX_KNOWN) &&
            'bg-warning'
        )}
      >
        {letter}
      </div>
    </div>
  );
};
