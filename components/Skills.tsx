'use client';
import Image from 'next/image';

interface SkillItem {
  id: string;
  title: string;
  img: string;
}

const skills: Array<SkillItem> = [
  { id: '1', title: 'HTML', img: '/assets/skills/html.png' },
  { id: '2', title: 'CSS', img: '/assets/skills/css.png' },
  { id: '3', title: 'JavaScript', img: '/assets/skills/javascript.png' },
  { id: '4', title: 'React', img: '/assets/skills/react.png' },
  { id: '5', title: 'SCSS', img: '/assets/skills/sass.png' },
  { id: '6', title: 'MUI', img: '/assets/skills/mu5.png' },
  { id: '7', title: 'Tailwind', img: '/assets/skills/tailwind.png' },
  { id: '8', title: 'Redux', img: '/assets/skills/redux.png' },
  { id: '9', title: 'NextJS', img: '/assets/skills/nextjs.png' },
  { id: '10', title: 'TypeScript', img: '/assets/skills/typescript.png' },
  { id: '11', title: 'NodeJS', img: '/assets/skills/node.png' },
  { id: '12', title: 'MongoDB', img: '/assets/skills/mongo.png' },
  { id: '13', title: 'Git', img: '/assets/skills/git.png' },
  { id: '14', title: 'Github', img: '/assets/skills/github1.png' },
];
export default function Skills() {
  return (
    <section id="skills" className="my-16">
      <h2 className="uppercase text-center text-3xl font-bold tracking-widest text-[#5d31b6] mt-4 ">
        My Skills & Experience
        <hr className="w-10 h-1 mx-auto my-4 bg-violet-500 border-0 rounded"></hr>
      </h2>
      <div className="flex flex-col items-center w-full mt-8 lg:flex-row lg:justify-center">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 lg:justify-start ">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center justify-center m-2 transition-all duration-300 transform hover:scale-105"
            >
              <div className="p-3 rounded-full border-violet-900 shadow-lg hover:shadow-md">
                <Image
                  src={skill.img}
                  alt={skill.title}
                  width={150}
                  height={150}
                  className="w-10 h-10 lg:w-16 lg:h-16"
                />
              </div>
              <p className="mt-2 font-medium text-center text-violet-900">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
