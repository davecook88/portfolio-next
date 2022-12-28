import { FC } from 'react';

import { SuggestionsListProps } from '@/components/wordle/SuggestionsList/types';

export const SuggestionsList: FC<SuggestionsListProps> = ({
  words,
  addGuessWord,
}) => {
  return (
    <div className='flex select-none flex-wrap justify-center gap-2 p-2 text-center md:w-4/6'>
      {words.map((word) => (
        <div
          key={word.string}
          className=' badge m-auto cursor-pointer  hover:badge-primary'
          onClick={() => addGuessWord(word.string.toUpperCase())}
        >
          {word.string}
        </div>
      ))}
    </div>
  );
};
