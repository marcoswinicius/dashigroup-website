"use client"

import React, { useState, useEffect } from 'react';
import MegaMenu from './MegaMenu';
import LanguageSwitch from './LanguageSwitch';
import ContactButton from './ContactButton';
import Logo from './ui/Logo';
import Link from 'next/link';
import { Menu, X, ChevronRight, Home, Info, Layers, Folder } from 'lucide-react';
import Image from 'next/image';

interface DropdownItem {
  title: string;
  subtitle?: string;
  image: string;
  href: string;
}

interface MenuItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  dropdown?: {
    items: DropdownItem[];
  };
}

const menuItems: MenuItem[] = [
  {
    title: 'Home',
    href: '/',
    icon: <Home className="w-5 h-5 mr-2" />,
  },
  {
    title: 'About Us',
    href: '/about',
    icon: <Info className="w-5 h-5 mr-2" />,
  },
  {
    title: 'Services',
    href: '/services',
    icon: <Layers className="w-5 h-5 mr-2" />,
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
    icon: <Folder className="w-5 h-5 mr-2" />,
    dropdown: {
      items: [
        {
          title: 'Data Center',
          image: '/images/data-science.jpg',
          href: '/projects/data-center',
        },
        {
          title: 'Panorama St Paul',
          image: '/images/panorama-st-paul.png',
          href: '/projects/panorama-st-pauls',
        },
        {
          title: 'Ashley Road',
          image: '/images/ahsley-road.jpg',
          href: '/projects/ashley-road',
        },
        {
          title: 'Lombard Square',
          image: '/images/lombard-square.jpg',
          href: '/projects/lombard-square',
        },
      ],
    },
  },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [mobileOpen]);

  return (
    <header className="bg-dark-grey shadow-sm flex items-center justify-center relative">
      <div className="w-full px-4 sm:px-6 md:px-6 lg:px-16 2xl:px-28 py-8">
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

          {/* Botão sempre visível no canto direito */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(!mobileOpen);
                setSubmenuOpen(null);
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary-orange focus:outline-none"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-dark-grey z-50 px-6 py-8 transition-all overflow-y-auto flex flex-col justify-between">
          <div>
            {/* Topo com logo e botão de fechar no mesmo lugar */}
            <div className="flex items-center justify-between mb-8">
              <Link href={'/'}>
                <Logo />
              </Link>
              <button onClick={() => setMobileOpen(false)}>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            {!submenuOpen && (
              <ul className="flex flex-col space-y-6">
                {menuItems.map((item) => (
                  <li key={item.title}>
                    {item.dropdown ? (
                      <button
                        onClick={() => setSubmenuOpen(item.title)}
                        className="flex items-center text-white text-xl w-full text-left hover:text-primary-orange transition-colors"
                      >
                        {item.icon}
                        {item.title}
                        <ChevronRight className="ml-auto w-4 h-4" />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center text-white text-xl hover:text-primary-orange transition-colors"
                      >
                        {item.icon}
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            )}

            {submenuOpen && (
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => setSubmenuOpen(null)}
                  className="text-white text-left text-sm mb-4 hover:underline"
                >
                  ← Back
                </button>
                {menuItems.find((m) => m.title === submenuOpen)?.dropdown?.items.map((sub) => (
                  <Link
                    key={sub.title}
                    href={sub.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-4 text-white text-lg hover:text-primary-orange transition-colors"
                  >
                    <div className="relative w-12 h-12">
                      <Image
                        src={sub.image}
                        alt={sub.title}
                        fill
                        className="rounded-md object-cover"
                      />
                    </div>
                    {sub.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Rodapé da aba mobile ajustado */}
          <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col gap-4">
            <div className="self-start">
              <ContactButton />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
