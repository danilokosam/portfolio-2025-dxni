import { useEffect } from 'react';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    if (menuOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    // document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className='fixed top-0 z-40 w-full border-b border-white/40 bg-[rgba(10,10,10,0.3)] shadow-lg backdrop-blur-lg'>
      <div className='mx-auto max-w-5xl px-4'>
        <div className='flex h-16 items-center justify-between'>
          <a
            href='#home'
            className='font-mono text-xl font-bold text-white'
          >
            {' '}
            danilokosam
            <span className='text-blue-500'>.tech</span>{' '}
          </a>
          {/* Mobile menu button */}
          <div
            className='relative z-40 h-5 w-7 cursor-pointer md:hidden'
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          {/* Mobile menu button */}
          <div className='hidden items-center space-x-8 md:flex'>
            <a
              href='#home'
              className='text-gray-300 transition-colors hover:text-white'
            >
              Home
            </a>
            <a
              href='#about'
              className='text-gray-300 transition-colors hover:text-white'
            >
              About
            </a>
            <a
              href='#projects'
              className='text-gray-300 transition-colors hover:text-white'
            >
              Projects
            </a>
            <a
              href='#contact'
              className='text-gray-300 transition-colors hover:text-white'
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
