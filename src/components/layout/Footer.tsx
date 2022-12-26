import UnderlineLink from '../links/UnderlineLink';

export const Footer = () => {
  return (
    <footer className='fixed bottom-2 flex w-full justify-center text-gray-700'>
      <div className='mx-1'>© {new Date().getFullYear()} By </div>
      <UnderlineLink href='https://github.com/davecook88'>
        Dave Cook
      </UnderlineLink>
    </footer>
  );
};
