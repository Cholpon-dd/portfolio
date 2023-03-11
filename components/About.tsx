'use client';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="h-auto mb-12 md:mt-16 lg:mt-4">
      <h2 className="uppercase  text-center text-3xl font-bold tracking-widest text-[#5d31b6]">
        About Me
        <hr className="w-10 h-1 mx-auto my-4 bg-violet-500 border-0 rounded"></hr>
      </h2>
      <div className="w-full p-2 flex items-center ">
        <div className="max-w-[1240px] m-auto grid md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <p className="py-4 text-gray-600 text-xl tracking-wide font-semibold">
              I specialize in building mobile responsive front-end UI applications that connect with
              API&#39;s and other backend technologies. I&#39;m passionate about learning new
              technologies and understand there is more than one way to accomplish a task. Though
              I&#39;m most proficient in building front-end applications using HTML, CSS,
              Javascript, and React, I&#39;m a quick learner and can pick up new tech stacks as
              needed. I believe that being a great developer is not using one specific language, but
              choosing the best tool for the job.
            </p>
            <p className="py-2 text-gray-600 text-xl tracking-wide font-semibold">
              My skills also extend beyond front-end development, and I have experience working with
              back-end technologies such as Node.js and MongoDB. I&#39;m constantly learning and
              adapting to new technologies, and I&#39;m always excited to take on new challenges.
            </p>
          </div>
          <div className="ml-8">
            <div className="w-full h-full">
              <Image
                src="assets/about.svg"
                width={450}
                height={400}
                alt="girl"
                className="md:w-11/12 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
