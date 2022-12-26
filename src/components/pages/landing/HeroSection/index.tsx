import Image from 'next/image';
import Typewriter from 'typewriter-effect';

import Button from '@/components/buttons/Button';
import ArrowLink from '@/components/links/ArrowLink';

export const LandingHeroSection = () => {
  return (
    <div className='hero min-h-screen'>
      <div className='hero-content text-center'>
        <div>
          <div className='flex flex-col-reverse md:grid md:grid-cols-2	'>
            <div className='p-4'>
              <h1 className='text-5xl font-bold'>
                I am <span className='capitalize text-accent'>Dave Cook</span>
              </h1>
              <div className='h-24 p-4 '>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        'Full stack developer and automation consultant'
                      )

                      .start();
                  }}
                />
              </div>
              <ArrowLink href='/contact'>Get in touch</ArrowLink>
            </div>
            <div className='flex h-full w-full justify-center align-middle'>
              <div className='relative h-64 w-64 rounded-xl md:h-72 md:w-72'>
                <Image
                  className='rounded-full shadow-xl'
                  src='/images/dave.jpeg'
                  layout='fill'
                  objectFit='cover'
                  alt='Dave Cook'
                />
              </div>
            </div>
          </div>{' '}
          <div className='m-4 flex justify-around p-8'>
            <Button className=''>Learn to code with me </Button>
            <Button>See my projects</Button>
            <Button>See my resume</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
