import { FC, useContext } from 'react';

import { WordleClueContext } from '@/components/wordle';
import { LetterBoxProps } from '@/components/wordle/LetterBox/types';

export const LetterBox: FC<LetterBoxProps> = ({ letter = '' }) => {
  const context = useContext(WordleClueContext);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    e.preventDefault();

  return (
    <div className='border border-black '>
      <div className='flex h-8 w-8 items-center justify-center bg-transparent text-center'>
        {letter}
      </div>
    </div>
  );
};
