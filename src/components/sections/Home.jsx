import skin from '/skin-profile.png';
import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
  return (
    <section
      id='home'
      className='relative flex min-h-screen flex-col items-center justify-center md:flex-row'
    >
      <RevealOnScroll>
        {/* introduction  */}
        <div className='z-10 order-1 mt-24 flex flex-col justify-center px-6 text-center md:order-none md:h-[480px]'>
          <h1 className='leading-right mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent md:text-7xl'>
            Hi, I'm Daniel
          </h1>
          <p className='mx-auto mb-8 max-w-lg text-base leading-snug text-gray-100 md:text-lg'>
            I'm a full-stack developer with a passion for creating
            beautiful and user-friendly interfaces. I've worked on
            various projects, from small side projects to large-scale
            applications.
          </p>
          <div className='mx-auto flex w-2/3 flex-col justify-center gap-3 sm:flex-row md:w-auto md:gap-4'>
            <a
              href='#projects'
              className='relative overflow-hidden rounded bg-blue-500 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'
            >
              {' '}
              View Projects
            </a>
            <a
              href='#contact'
              className='rounded border border-blue-500/50 px-6 py-3 font-medium text-blue-500 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]'
            >
              {' '}
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        {/* introduction  */}
        {/* Skin */}
        <div className='order-2 mt-12 flex h-80 items-center justify-center overflow-hidden md:order-none md:mt-24 md:h-[480px]'>
          <img
            src={skin}
            alt="Daniel's skin"
            className='custom-mask h-auto max-h-full w-full object-contain'
          ></img>
        </div>
        {/* Skin */}
      </RevealOnScroll>
    </section>
  );
};
