"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { 
    title: 'Home', 
    href: '/',
  },
  { 
    title: 'About Us', 
    href: '/about',
  },
  { 
    title: 'Services', 
    href: '/services',
    dropdownItems: [
      { title: 'Consultoria', href: '/services/consultoria' },
      { title: 'Desenvolvimento', href: '/services/desenvolvimento' },
      { title: 'Design', href: '/services/design' },
      { title: 'Marketing Digital', href: '/services/marketing' },
    ]
  },
  { 
    title: 'Projects', 
    href: '/projects',
    dropdownItems: [
      { title: 'Portfólio', href: '/project/portfolio' },
      { title: 'Cases de Sucesso', href: '/project/cases' },
      { title: 'Em Andamento', href: '/project/ongoing' },
    ]
  },
];

const MegaMenu = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <nav className="relative">
      <ul className="flex items-center space-x-6">
        {menuItems.map((item) => (
          <li
            key={item.title}
            className="relative group"
            onMouseEnter={() => setActiveItem(item.title)}
            onMouseLeave={() => setActiveItem(null)}
          >
            <Link
              href={item.href}
              className={`
                relative px-3 py-2 text-white text-lg hover:text-primary-orange transition-colors duration-200
                group-hover:before:content-[''] group-hover:before:absolute group-hover:before:inset-0 
                group-hover:before:bg-white/10 group-hover:before:rounded-md group-hover:before:-z-10
                ${pathname === item.href ? 'after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-primary-orange' : ''}
              `}
            >
              {item.title}
            </Link>

            {item.dropdownItems && activeItem === item.title && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-dark-grey rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                <div className="py-2" role="menu">
                  {item.dropdownItems.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.title}
                      href={dropdownItem.href}
                      className={`
                        block px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors duration-200
                        ${pathname === dropdownItem.href ? 'border-l-2 border-primary-orange bg-white/5' : ''}
                      `}
                      role="menuitem"
                    >
                      {dropdownItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MegaMenu; 