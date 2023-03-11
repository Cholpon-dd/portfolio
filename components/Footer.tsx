'use client';
import Link from 'next/link';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full px-4 sm:px-6 bg-[#5d31b6]">
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-white dark:text-neutral-100">
          © 2022 Cholpon Damirbekova<Link href="/" className="hover:underline"></Link>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <Link href="https://github.com/Cholpon-dd" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform hover:text-[#460c6a] cursor-pointer text-white dark:text-neutral-100"
              size={30}
            />
          </Link>
          <Link href="https://t.me/cholpon_dd" target="_blank">
            <FaTelegramPlane
              className="hover:-translate-y-1 transition-transform hover:text-[#460c6a] cursor-pointer text-white dark:text-neutral-100"
              size={27}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/cholpon-damirbekova-a879b022b/" target="_blank">
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform hover:text-[#460c6a] cursor-pointer text-white dark:text-neutral-100"
              size={30}
            />
          </Link>
          <Link href="https://www.instagram.com/cholpon_d" target="_blank">
            <AiOutlineInstagram
              className="hover:-translate-y-1 transition-transform hover:text-[#460c6a] cursor-pointer text-white dark:text-neutral-100"
              size={30}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
