import { RevealOnScroll } from '../RevealOnScroll';

export const About = () => {
  const frontendSkills = [
    'React',
    'TailwindCSS',
    'Typescript',
    'Next.js',
    'Astro',
  ];

  const backendSkills = [
    'Node.js',
    'Python',
    'Django',
    'Express.js',
    'MongoDB',
  ];
  return (
    <section
      id='about'
      className='flex min-h-screen items-center justify-center py-28'
    >
      <RevealOnScroll>
        <div className='mx-auto max-w-3xl px-4'>
          <h2 className='mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-3xl font-bold text-transparent duration-300 ease-in-out'>
            About Me
          </h2>
          <div className='group rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3),0_0_40px_rgba(34,211,238,0.1)]'>
            <p className='mb-6 text-gray-300'>
              I'm a software engineer with a passion for creating
              beautiful and user-friendly interfaces. My background
              includes working in various tech companies and
              contributing to open-source projects. I'm always eager
              to learn and improve my skills, so feel free to reach
              out if you're interested in working together or
              discussing projects.
            </p>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              {/* Frontend Skills */}
              <div className='rounded-xl p-6 transition-all duration-300 ease-in-out hover:-translate-y-1'>
                <h3 className='mb-4 text-xl font-bold'>Frontend</h3>
                <div className='flex flex-wrap gap-2'>
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className='rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition duration-300 ease-in-out select-none hover:bg-blue-500/20 hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* Frontend Skills */}

              {/* Backend Skills */}
              <div className='rounded-xl p-6 transition-all hover:-translate-y-1'>
                <h3 className='mb-4 text-xl font-bold'>Backend</h3>
                <div className='flex flex-wrap gap-2'>
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className='rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition duration-300 ease-in-out select-none hover:bg-blue-500/20 hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* Backend Skills */}
            </div>
          </div>

          <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-2'>
            <div className='group flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3),0_0_40px_rgba(34,211,238,0.1)]'>
              <h3 className='mb-4 text-xl font-bold'>🏫 Education</h3>
              <div className='flex flex-1 items-center justify-center'>
                <ul className='list-inside list-disc space-y-2 text-sm text-gray-300'>
                  <li>
                    Software Programming Technician, SENA, 2023 - 2024
                  </li>
                  <li>Bootcamp, Academia X, 2024 - 2025</li>
                  <li>
                    Web application design and integration of
                    interactive multimedia audiovisual products into
                    web applications, 2024 - 2025
                  </li>
                </ul>
              </div>
            </div>
            <div className='group flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3),0_0_40px_rgba(34,211,238,0.1)]'>
              <h3 className='mb-4 text-xl font-bold'>
                💼 Work Experience
              </h3>
              <div className='space-y-4 text-gray-300'>
                <div className='flex flex-1 flex-col justify-center'>
                  <h4 className='font-semibold'>
                    Independent Full-Stack Developer | Self-Employed
                  </h4>
                  <p className='pt-2 pb-2 text-sm'>
                    {' '}
                    Actively architecting and deploying full-stack
                    applications to master modern web technologies.
                    Focusing on solving real-world problems through
                    clean code and scalable system design.
                  </p>
                  <p className='font-extrabold'>2024 - Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
