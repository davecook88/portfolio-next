import { useState } from 'react';

import { LogoAttributions } from '@/components/pages/landing/StackSection/attributions';
import { TechCategory } from '@/components/pages/landing/StackSection/constants';
import { StackCategorySection } from '@/components/pages/landing/StackSection/StackCategorySection';
import { StackSectionInfoPane } from '@/components/pages/landing/StackSection/StackSectionInfoPane';
import { StackTechnologySection } from '@/components/pages/landing/StackSection/StackTechnologySection';
import { IconEntry } from '@/components/pages/landing/StackSection/types';

const categoryMap: Record<TechCategory, string> = {
  [TechCategory.back]: 'Back End',
  [TechCategory.front]: 'Front End',
  [TechCategory.scripting]: 'Scripting',
  [TechCategory.devops]: 'Deployment',
};

export const LandingStackSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<TechCategory | null>(
    null
  );
  const [selectedTech, setSelectedTech] = useState<IconEntry | undefined>();

  return (
    <section className='container m-auto'>
      <div className='m-auto mb-12 w-3/6 border-t-2 border-secondary'></div>
      <div className='w-full p-4 text-center'>
        <h1>My favourite stacks</h1>
      </div>
      <div className='w-full p-8'>
        <ul className='m-auto flex list-none justify-between font-extrabold md:w-3/6 '>
          {Object.entries(categoryMap).map(([key, label]) => (
            <li
              key={key}
              className='cursor-pointer hover:text-secondary'
              onClick={() =>
                setSelectedCategory(key as unknown as TechCategory)
              }
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
      <div className=' grid md:grid-cols-3'>
        <div className='md:col-span-2'>
          {selectedCategory ? (
            <StackCategorySection
              selectedCategory={selectedCategory}
              label={categoryMap[selectedCategory]}
              setSelectedTech={setSelectedTech}
            />
          ) : (
            <StackTechnologySection setSelectedTech={setSelectedTech} />
          )}
        </div>
        <div>
          <StackSectionInfoPane tech={selectedTech} />
        </div>
      </div>
      <div
        id='logo-attributions'
        className='order-first p-4 text-xs transition-all md:m-4'
      >
        <LogoAttributions />
      </div>
    </section>
  );
};
