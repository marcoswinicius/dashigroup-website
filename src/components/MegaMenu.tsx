"use client"

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

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
    dropdown: {
      items: [
        {
          title: 'Reinforcement Detailing',
          subtitle: 'Civil Engineering & Consulting',
          image: '/images/rc-installation.jpg',
          href: '/services/reinforcement-detailing',
        },
        {
          title: 'Steel Fixing',
          image: '/images/groundwork-and-falsework-tab.jpg',
          href: '/services/steel-fixing',
        },
        {
          title: 'Groundwork & Falsework',
          image: '/images/reinforcemet-detailing.jpg',
          href: '/services/groundwork-falsework',
        },
      ],
    },
  },
  {
    title: 'Projects',
    href: '/projects',
    dropdown: {
      items: [
        {
          title: 'Project 1',
          image: '/images/default-project.jpg',
          href: '/projects/project-1',
        },
        {
          title: 'Project 2',
          image: '/images/default-project.jpg',
          href: '/projects/project-2',
        },
        {
          title: 'Project 3',
          image: '/images/default-project.jpg',
          href: '/projects/project-3',
        },
        {
          title: 'Project 4',
          image: '/images/default-project.jpg',
          href: '/projects/project-4',
        },
      ],
    },
  },
];

export default function MegaMenu() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const menuRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (openMenu && dropdownRef.current) {
      const header = dropdownRef.current.closest('header');
      const headerRect = header?.getBoundingClientRect();
      const dropdownRect = dropdownRef.current.getBoundingClientRect();

      if (headerRect) {
        // Garante que o dropdown fique dentro dos limites do header
        dropdownRef.current.style.left = `${headerRect.left}px`;
        dropdownRef.current.style.width = `${headerRect.width}px`;
        dropdownRef.current.style.maxWidth = '100%';
      }

      // Previne rolagem horizontal ajustando a posição se necessário
      if (dropdownRect.right > window.innerWidth) {
        dropdownRef.current.style.left = `${window.innerWidth - dropdownRect.width}px`;
      }
    }
  }, [openMenu]);

  return (
    <nav className="relative flex items-center gap-8">
      {menuItems.map((item) => (
        <div
          key={item.title}
          ref={(el) => {
            if (el) menuRefs.current.set(item.title, el);
          }}
          className="relative"
          onMouseEnter={() => setOpenMenu(item.title)}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <Link
            href={item.href}
            className={`text-white hover:text-primary-orange transition-colors relative pb-2 flex items-center gap-1 ${
              pathname === item.href ? 'text-primary-orange' : ''
            }`}
          >
            {item.title}
            {item.dropdown && (
              <ChevronDown
                size={16}
                className={`text-white transition-transform duration-200 ${
                  openMenu === item.title ? 'rotate-180' : ''
                }`}
              />
            )}
            {pathname === item.href && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-orange"></span>
            )}
          </Link>

          {item.dropdown && openMenu === item.title && (
            <div
              ref={dropdownRef}
              className="absolute top-full mt-2 bg-dark-grey rounded-lg shadow-lg p-6 z-50 w-full left-0"
            >
              <div
                className={`${
                  item.title === 'Services'
                    ? 'grid grid-cols-1 md:grid-cols-3 gap-4'
                    : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
                } max-w-full`}
              >
                {item.dropdown.items.map((dropdownItem) => (
                  <Link
                    key={dropdownItem.title}
                    href={dropdownItem.href}
                    className="group flex flex-col md:flex-row gap-4 hover:bg-gray-800 p-2 rounded-md transition-colors"
                  >
                    <div className="relative w-full md:w-24 h-24 flex-shrink-0">
                      <Image
                        src={dropdownItem.image}
                        alt={dropdownItem.title}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold group-hover:text-primary-orange">
                        {dropdownItem.title}
                      </h3>
                      {dropdownItem.subtitle && (
                        <p className="text-gray-400 text-sm">{dropdownItem.subtitle}</p>
                      )}
                      <button className="mt-2 text-primary-orange text-sm font-medium group-hover:underline">
                        Learn More →
                      </button>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-white text-sm">
                    Need a custom solution?
                  </p>
                  <Link
                    href="/contact"
                    className="bg-primary-orange text-white px-4 py-2 rounded-md hover:bg-primary-orange/90 transition-colors text-sm"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}