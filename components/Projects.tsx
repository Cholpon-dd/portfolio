'use client';
import ProjectItems from './ProjectItems';
import style from './projects.module.css';

interface ProjItem {
  id: string;
  title: string;
  image: string;
  code: string;
  demo: string;
}

const projects: Array<ProjItem> = [
  {
    id: '1',
    title: 'European Tour',
    image: '/assets/projects/travel.png',
    code: 'https://github.com/Cholpon-dd/next_js_travel',
    demo: 'https://next-js-travel.vercel.app/',
  },
  {
    id: '2',
    title: 'Recipe of dishes',

    image: '/assets/projects/recipe.png',
    code: 'https://github.com/Cholpon-dd/recipe_rtk_query_ts',
    demo: 'https://recipe-rtk-query-ts.vercel.app/',
  },
  {
    id: '3',
    title: 'Nft cards',
    image: '/assets/projects/nft.png',
    code: 'https://github.com/Cholpon-dd/nft-gallery',
    demo: 'https://nft-gallery-zeta.vercel.app/',
  },
  {
    id: '4',
    title: 'E-commerce',
    image: '/assets/projects/shop.png',
    code: 'https://github.com/Cholpon-dd/tailwindCSS',
    demo: 'https://cholpon-dd.github.io/tailwindCSS/',
  },
  {
    id: '5',
    title: 'Weather App',
    image: '/assets/projects/weather.png',
    code: 'https://github.com/Cholpon-dd/react-weather',
    demo: 'https://react-weather-app-rose.vercel.app/',
  },
  {
    id: '6',
    title: 'To do List',
    image: '/assets/projects/todo.png',
    code: 'https://github.com/Cholpon-dd/react-todo-list',
    demo: 'https://react-todo-one-xi.vercel.app/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="h-auto">
      <h2 className="uppercase text-center text-3xl font-bold tracking-widest  text-[#5d31b6] mt-16">
        What I have built
        <hr className="w-10 h-1 mx-auto my-4 bg-violet-500 border-0 rounded"></hr>
      </h2>
      <div className={style.project__wrapper}>
        {projects.map((project) => (
          <ProjectItems
            key={project.id}
            title={project.title}
            img={project.image}
            code={project.code}
            demo={project.demo}
          />
        ))}
      </div>
    </section>
  );
}
