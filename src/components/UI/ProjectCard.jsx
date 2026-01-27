import { GitHub } from '../../assets/Icons';

export const ProjectCard = ({
  title,
  description,
  image,
  tech,
  link,
  github,
}) => {
  return (
    <div className='group flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3),0_0_40px_rgba(34,211,238,0.1)]'>
      <h3 className='mb-2 text-xl font-bold'>{title}</h3>

      <div className='relative mb-6 aspect-video overflow-hidden rounded-lg'>
        <img
          src={image}
          alt={`${title} Preview`}
          className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
      </div>

      <p className='mb-4 text-gray-400'>{description}</p>

      <div className='mb-4 flex flex-wrap gap-2'>
        {tech.map((t, key) => (
          <span
            key={key}
            className='rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-500 transition duration-300 ease-in-out select-none hover:bg-blue-500/20 hover:text-white hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]'
          >
            {t}
          </span>
        ))}
      </div>

      <div className='mt-auto flex items-center justify-between border-t border-white/5 pt-4'>
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='group/link flex items-center gap-2 font-medium text-blue-400 transition-all hover:text-white'
        >
          View Project
          <span className='transition-transform group-hover/link:translate-x-1'>
            →
          </span>
        </a>

        <a
          href={github}
          target='_blank'
          rel='noopener noreferrer'
          className='flex transform items-center gap-2 transition-all hover:scale-110'
          title='View Source Code'
        >
          <GitHub className='h-6 w-6' />
        </a>
      </div>
    </div>
  );
};
