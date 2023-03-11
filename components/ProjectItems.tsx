'use client';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';
import style from './projects.module.css';

type ProjectProps = {
  title: string;
  img: string;
  code: string;
  demo: string;
};
export default function ProjectItems({ title, img, code, demo }: ProjectProps) {
  return (
    <>
      <div className={style.container}>
        <div className={style.circle__container}>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
          <div className="flex justify-between items-center space-x-3">
            <p className={style.title}>{title}</p>
            <Link href={code} className="" target="_blank">
              <BsGithub size={20} className="text-white hover:text-slate-700 cursor-pointer" />
            </Link>
            <Link href={demo} target="_blank">
              <BsArrowUpRightSquare
                size={18}
                className=" text-white hover:text-slate-700 cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <Image src={img} alt={title} width={500} height={400} className={style.image} />
      </div>
    </>
  );
}
