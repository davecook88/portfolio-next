import Image from 'next/image';
import { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';

import { projectDetailsPaneProps } from '@/components/pages/landing/ProjectsSection/ProjectDetailsPane/types';

export const ProjectDetailsPane: FC<projectDetailsPaneProps> = ({
  selectedProjectEntry,
}) => {
  return (
    <div>
      {selectedProjectEntry.images.length > 0 && (
        <Carousel autoPlay={true} showArrows={true} showStatus={false}>
          {selectedProjectEntry?.images.map((imageSrc, idx) => (
            <div className='w-full' key={imageSrc}>
              <div className='relative m-auto h-60 w-5/6'>
                <Image
                  src={imageSrc}
                  layout='fill'
                  objectFit='cover'
                  alt={`${selectedProjectEntry.name}-${idx}`}
                />
              </div>
            </div>
          ))}
        </Carousel>
      )}
      <ul>
        {selectedProjectEntry?.github?.map((githubEntry) => (
          <li key={githubEntry.url} className='my-2 flex justify-center'>
            <a
              href={githubEntry.url}
              target='_blank'
              rel='noreferrer'
              className='flex w-max cursor-pointer items-center  justify-center'
            >
              <div className='relative m-1 mx-2 h-8 w-8 rounded-full  p-2'>
                <Image
                  src='/svg/github.svg'
                  layout='fill'
                  alt={githubEntry.label + ' github link'}
                />
              </div>
              <span className='hover:text-white'>
                Github repo: {githubEntry.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
