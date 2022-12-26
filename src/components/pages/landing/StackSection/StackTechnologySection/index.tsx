import Image from 'next/image';

import { stackIcons } from '@/components/pages/landing/StackSection/constants';
import { StackTechnologySectionProps } from '@/components/pages/landing/StackSection/StackTechnologySection/types';

export const StackTechnologySection: React.FC<StackTechnologySectionProps> = ({
  setSelectedTech,
}) => {
  return (
    <div className='flex h-max w-full flex-wrap justify-around	md:col-span-2'>
      {stackIcons.map((iconEntry) => (
        <div
          key={iconEntry.name}
          className='relative m-6 h-16 w-16 cursor-pointer md:h-20 md:w-20 md:p-2 '
          onClick={() => setSelectedTech(iconEntry)}
        >
          <Image
            src={iconEntry.logo}
            layout='fill'
            alt={iconEntry.name}
            className=' p-1 hover:rounded-full hover:bg-white md:order-none'
          />
        </div>
      ))}
    </div>
  );
};
