import React from 'react';
import MegaMenu from './MegaMenu';
import LanguageSwitch from './LanguageSwitch';
import ContactButton from './ContactButton';
import Logo from './ui/Logo';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-dark-grey shadow-sm flex items-center justify-center">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href={'/'}>
              <Logo />
            </Link>
          </div>

          <div className="hidden lg:flex md:items-center md:space-x-8 gap-6">
            <MegaMenu />
            <div className='flex gap-6 items-center'>
              <LanguageSwitch />
              <ContactButton />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
