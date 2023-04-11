'use client';
import { useState } from 'react';
import { Link } from 'react-scroll/modules';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { HiMenuAlt1 } from 'react-icons/hi';
import { IoCloseCircleOutline } from 'react-icons/io5';

interface NavItem {
  id: string;
  title: string;
  page: string;
}

const navItems: Array<NavItem> = [
  {
    id: '1',
    title: 'Home',
    page: 'home',
  },
  {
    id: '2',
    title: 'About',
    page: 'about',
  },
  {
    id: '3',
    title: 'Skills',
    page: 'skills',
  },
  {
    id: '4',
    title: 'Contacts',
    page: 'contact',
  },
];

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);

  return (
    <header
      className="w-full fixed mx-auto px-4 sm:px-20 top-0
         z-50 shadow bg-[#5d31b6] dark:bg-[#343a40] dark:border-b dark:border-stone-600  backdrop-filter backdrop-blur-sm bg-opacity-80"
    >
      <div className="justify-between md:items-center md:flex">
        <div>
          <div
            className="flex items-center justify-between
                    py-3 md:py-5 md:block"
          >
            <Link to="home">
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold text-white hover:text-[#460c6a] cursor-pointer dark:text-neutral-100 dark:hover:text-[#460c6a]">
                  Cholpon_D
                </h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none
                            focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <IoCloseCircleOutline size={30} color="white" />
                ) : (
                  <HiMenuAlt1 size={30} color="white" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <div
              className="items-center justify-center space-y-8
                        md:flex md:space-x-6 md:space-y-0"
            >
              {navItems.map(({ id, title, page }) => {
                return (
                  <Link
                    key={id}
                    to={page}
                    className={
                      'block text-xl font-bold cursor-pointer lg:inline-block text-white hover:text-[#460c6a]  dark:text-neutral-100 dark:hover:text-[#460c6a]'
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {title}
                  </Link>
                );
              })}
              {currentTheme === 'dark' ? (
                <button
                  onClick={() => setTheme('light')}
                  className="bg-violet-400 p-2 rounded-xl cursor-pointer  hover:text-[#460c6a] "
                >
                  <RiSunLine color="black" size={20} />
                </button>
              ) : (
                <button
                  onClick={() => setTheme('dark')}
                  className="bg-violet-400  p-2 rounded-xl cursor-pointer hover:text-[#460c6a]"
                >
                  <RiMoonFill />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
