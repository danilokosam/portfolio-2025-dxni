import { RevealOnScroll } from '../RevealOnScroll';

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
            <div className='rounded-xl border border-white/10 p-6 transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]'>
              <h3 className='mb-2 text-xl font-bold'>
                Cloud Platform
              </h3>
              <p className='mb-4 text-gray-400'>
                Improved application performance and reduced latency
                by 30% through strategic cloud infrastructure
                optimization. Leveraged cloud-native services to
                streamline resource allocation, implemented
                auto-scaling, and fine-tuned caching mechanisms.
                Resulted in enhanced user experience, increased system
                reliability, and significant cost savings.
              </p>
              <div className='mb-4 flex flex-wrap gap-2'>
                {['React', 'Node.js', 'AWS', 'Docker'].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className='rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition-all hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]'
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>

              <div className='flex items-center justify-between'>
                <a
                  href='#'
                  className='my-4 text-blue-400 transition-colors hover:text-blue-300'
                >
                  View Project ➡️
                </a>
              </div>
            </div>
            {/* Project 1 */}
            {/* Project 2 */}
            <div className='rounded-xl border border-white/10 p-6 transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]'>
              <h3 className='mb-2 text-xl font-bold'>
                Cloud Platform
              </h3>
              <p className='mb-4 text-gray-400'>
                Improved application performance and reduced latency
                by 30% through strategic cloud infrastructure
                optimization. Leveraged cloud-native services to
                streamline resource allocation, implemented
                auto-scaling, and fine-tuned caching mechanisms.
                Resulted in enhanced user experience, increased system
                reliability, and significant cost savings.
              </p>
              <div className='mb-4 flex flex-wrap gap-2'>
                {['React', 'Node.js', 'AWS', 'Docker'].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className='rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition-all hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]'
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>

              <div className='flex items-center justify-between'>
                <a
                  href='#'
                  className='my-4 text-blue-400 transition-colors hover:text-blue-300'
                >
                  View Project ➡️
                </a>
              </div>
            </div>
            {/* Project 2 */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
