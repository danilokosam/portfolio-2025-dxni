import { RevealOnScroll } from '../RevealOnScroll';
import churchPreview from '/church-landing-page.png';
import { ProjectCard } from '../UI/ProjectCard';
import chatAppPreview from '/chat-app.png';

export const Projects = () => {
  return (
    <section
      id='projects'
      className='flex min-h-screen items-center justify-center py-20'
    >
      <RevealOnScroll>
        <div className='mx-auto max-w-5xl px-4'>
          <h2 className='mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-3xl font-bold text-transparent'>
            Featured Projects
          </h2>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            {/* Project 1 */}
            <ProjectCard
              title='Church Landing Page'
              description='A modern, responsive church website built with Astro and Tailwind CSS...'
              image={churchPreview}
              tech={['Astro', 'Tailwind CSS', 'TypeScript']}
              link='https://landing-page-2-eosin.vercel.app/'
              github='https://github.com/danilokosam/landing-page-2'
            />
            {/* Project 1 */}
            {/* Project 2 */}
            <ProjectCard
              title='Church Landing Page'
              description='A modern, responsive church website built with Astro and Tailwind CSS...'
              image={chatAppPreview}
              tech={[
                'React',
                'Tailwind CSS',
                'Node.js',
                'MongoDB',
                'Socket.io',
                'Express.js',
              ]}
              link='https://landing-page-2-eosin.vercel.app/'
              github='https://github.com/danilokosam/landing-page-2'
            />
            {/* Project 2 */}
            {/* Project 3 */}
            <ProjectCard
              title='Church Landing Page'
              description='A modern, responsive church website built with Astro and Tailwind CSS...'
              image={churchPreview}
              tech={['Astro', 'Tailwind CSS', 'TypeScript']}
              link='https://landing-page-2-eosin.vercel.app/'
              github='https://github.com/danilokosam/landing-page-2'
            />
            {/* Project 3 */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
