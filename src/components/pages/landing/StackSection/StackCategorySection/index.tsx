import Image from 'next/image';
import { FC } from 'react';

import {
  stackIcons,
  TechCategory,
} from '@/components/pages/landing/StackSection/constants';
import { StackCategorySectionProps } from '@/components/pages/landing/StackSection/StackCategorySection/types';

export const StackCategorySection: FC<StackCategorySectionProps> = ({
  selectedCategory,
  setSelectedTech,
  label,
}) => {
  return (
    <section>
      <div className='w-full text-center'>
        <h3>{label}</h3>

        <div className='m-auto flex flex-wrap justify-between'>
          {Object.values(stackIcons)
            .filter((iconEntry) =>
              iconEntry.categories.has(Number(selectedCategory) as TechCategory)
            )
            .map((iconEntry) => (
              <div
                key={iconEntry.name}
                onClick={() => setSelectedTech(iconEntry)}
              >
                <div className='relative m-6 h-10 w-10 cursor-pointer hover:rounded-full hover:bg-white md:h-20 md:w-20 md:p-2'>
                  <Image
                    src={iconEntry.logo}
                    layout='fill'
                    alt={iconEntry.name}
                    className=' p-1'
                  />
                </div>
                <p>{iconEntry.name}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
