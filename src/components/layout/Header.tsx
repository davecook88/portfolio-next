import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [{ href: '/about', label: 'About' }];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-transparent'>
      <div className='layout flex h-14 items-center justify-between'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          Mamalon
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
