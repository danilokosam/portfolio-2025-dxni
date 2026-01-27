import { useEffect, useState } from 'react';

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState('');
  const fullText = '<Hello World />';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 800);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-gray-100'>
      <div className='mb-4 font-mono text-2xl font-bold md:text-4xl'>
        {text}
        <span className='animate-blink ml-1'> | </span>
      </div>

      <div className='relative h-[2px] w-[200px] overflow-hidden rounded bg-gray-800'>
        <div className='shadow[0_0_15px_#3b82f6] animate-loading-bar h-full w-[40%] bg-blue-500'>
          {' '}
        </div>
      </div>
    </div>
  );
};
