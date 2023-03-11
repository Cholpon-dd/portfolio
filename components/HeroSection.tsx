'use client';
import Image from 'next/image';
import Link from 'next/link';
import { BsBoxArrowInDown } from 'react-icons/bs';

export default function HeroSection() {
  return (
    <section id="home">
      <div
        className="flex flex-col text-center items-center
            justify-center my-4 py-4 sm:py-32 md:py-24 md:flex-row md:space-x-4"
      >
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold text-[#5d31b6] mt-6md:mt-0 md:text-6xl mb-16 capitalize">
            Hello, My name is
          </h1>
          <span className="text-4xl iniline-block font-bold lg:text-6xl uppercase text-[#530981] dark:text-neutral-100">
            Cholpon
          </span>
          <h2 className="text-4xl font-semibold text-[#5d31b6] my-12 md:text-5xl">
            And I&#39;m a Frontend Developer
          </h2>
          <Link
            href="/assets/CV_Damirbekova-frontend.pdf"
            className="font-semibold sm:mb-16 mt-8 px-4 py-4 rounded-md bg-[#460c6a] text-white cursor-pointer"
            target="_blank"
          >
            Download CV
            <BsBoxArrowInDown className="inline-block ml-2 mb-2 animate-pulse" size={20} />
          </Link>
        </div>
        <div className="sm:mt-32 md:mt-8">
          <Image
            src="/assets/hero_bg.svg"
            alt="main"
            width={400}
            height={450}
            className="md:w-11/12 h-full object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
}
