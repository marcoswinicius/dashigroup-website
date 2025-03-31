"use client"

import React, { useState, useRef } from 'react';
import Globe from './ui/Globe';
import Image from 'next/image';

const languages = [
  { code: 'en', label: 'English', flag: '/flags/englandFlag.tsx' },
  { code: 'es', label: 'Español', flag: '/flags/spainFlag.tsx' },
];

const LanguageSwitch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <div
      className="relative pb-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
      >
        <Globe />
        <span className="text-white">{currentLang.label}</span>
        <svg
          className={`w-4 h-4 text-white transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 rounded-md shadow-lg bg-dark-grey ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setCurrentLang(lang);
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors duration-200"
                role="menuitem"
              >
                <Image src={lang.flag} alt={lang.label} width={20} height={15} />
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitch;
