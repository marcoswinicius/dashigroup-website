"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

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

export default function MegaMenu() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(title);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  };

  return (
    <nav className="relative flex items-center justify-center gap-8 z-50">
      {menuItems.map((item) => (
        <div
          key={item.title}
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.title)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            href={item.href}
            className={`text-white hover:text-primary-orange transition-colors relative pb-2 flex items-center gap-1 ${pathname === item.href ? "text-primary-orange" : ""
              }`}
          >
            {item.title}
            {item.dropdown && (
              <ChevronDown
                size={16}
                className={`text-white transition-transform duration-200 ${openMenu === item.title ? "rotate-180" : ""
                  }`}
              />
            )}
            {pathname === item.href && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-orange"></span>
            )}
          </Link>

          {item.dropdown && openMenu === item.title && (
            <div className="absolute top-full left-1/3 -translate-x-1/2 mt-2 bg-dark-grey rounded-lg shadow-xl px-4 py-6 z-50 w-[900px] max-w-screen-xl box-border">
              <div
                className={`${item.title === "Services"
                    ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                  } max-w-screen-xl mx-auto`}
              >
                {item.dropdown.items.map((dropdownItem) => (
                  <Link
                    key={dropdownItem.title}
                    href={dropdownItem.href}
                    className="group flex flex-col md:flex-row gap-4 hover:bg-white/10 p-2 rounded-md transition-colors"
                  >
                    <div className="relative w-full md:w-24 h-28 flex-shrink-0">
                      <Image
                        src={dropdownItem.image}
                        alt={dropdownItem.title}
                        fill
                        className="object-cover rounded-md"
                        priority={true}
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between justify-items-start">
                      <h3 className="text-white font-semibold group-hover:text-primary-orange">
                        {dropdownItem.title}
                      </h3>
                      {dropdownItem.subtitle && (
                        <p className="text-gray-400 text-sm">
                          {dropdownItem.subtitle}
                        </p>
                      )}
                      <button className="mt-2 text-primary-orange text-[16px] font-medium group-hover:underline text-left w-full leading-none">
                        Learn More
                      </button>

                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-700 max-w-screen-xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-white text-sm">Need a custom solution?</p>
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
