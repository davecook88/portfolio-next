import { FC } from 'react';

import { SuggestionsListProps } from '@/components/wordle/SuggestionsList/types';

export const SuggestionsList: FC<SuggestionsListProps> = ({ words }) => {
  return (
    <div className='flex flex-col gap-2'>
      {words.map((word) => (
        <div key={word.string}>{word.string}</div>
      ))}
    </div>
  );
};
