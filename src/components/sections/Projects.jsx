import { RevealOnScroll } from '../RevealOnScroll';
import churchPreview from '/church-landing-page.png';
import { ProjectCard } from '../UI/ProjectCard';
import chatAppPreview from '/chat-app.png';
import agenCal from '/agent-cal-ai-driven.png';

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
              title='Full-Stack Real-Time Chat'
              description='A comprehensive messaging platform featuring real-time communication via WebSockets. It includes secure JWT authentication, global state management with Zustand, and cloud-based profile customization using Cloudinary.'
              image={chatAppPreview}
              tech={[
                'React',
                'Node.js',
                'MongoDB',
                'Socket.io',
                'Tailwind CSS',
                'Zustand',
                'Express',
              ]}
              link='https://chat-app-ten-livid-46.vercel.app'
              github='https://github.com/danilokosam/chat-app'
            />
            {/* Project 2 */}
            {/* Project 1 */}
            <ProjectCard
              title='AgentCal: AI-Driven Clinic Management'
              description='A professional healthcare scheduling system featuring real-time appointment management, conflict detection, and a responsive dashboard. Developed using Claude Code AI to ensure a high-performance, type-safe architecture and seamless data integrity via Supabase.'
              image={agenCal}
              tech={[
                'Next.js 16',
                'Supabase',
                'TypeScript',
                'Tailwind CSS',
                'Shadcn UI',
                'Claude Code AI',
              ]}
              link='https://agent-cal.vercel.app/dashboard'
              github='https://github.com/danilokosam/AgentCal'
            />
            {/* Project 1 */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
