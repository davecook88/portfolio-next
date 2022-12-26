import { FC } from 'react';

import { GuessRowProps } from '@/components/wordle/GuessRow/types';
import { LetterBox } from '@/components/wordle/LetterBox';

export const GuessRow: FC<GuessRowProps> = ({ guess }) => {
  return (
    <div className='flex flex-row gap-1 p-2'>
      {[...Array(5).keys()].map((x) => (
        <LetterBox key={x} letter={guess?.[x]} />
      ))}
    </div>
  );
};
