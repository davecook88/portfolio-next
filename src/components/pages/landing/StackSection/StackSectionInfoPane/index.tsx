import Image from 'next/image';
import React from 'react';

import { StackSectionInfoPaneProps } from '@/components/pages/landing/StackSection/StackSectionInfoPane/types';

export const StackSectionInfoPane: React.FC<StackSectionInfoPaneProps> = ({
  tech,
}) => {
  if (!tech)
    return (
      <div className='w-full p-4 text-center'>
        <h2 className=' py-2 font-extrabold text-accent'>
          Select a technology or category
        </h2>
        <p className='py-2'>
          See my thoughts and recommendations for each of these tools.
        </p>
      </div>
    );
  return (
    <div className='w-full'>
      <div className='p-4 text-center'>
        <h3 className='font-bold text-secondary'>{tech.name}</h3>
      </div>
      <div className='relative m-auto h-32 w-32'>
        <Image src={tech.logo} fill={true} alt={`${tech.name}-logo`} />
      </div>
      <div className='p-2 text-sm'>
        {tech.description?.split('\n').map((txt) => (
          <p key={txt} className='py-1'>
            {txt}
          </p>
        ))}
      </div>
    </div>
  );
};
