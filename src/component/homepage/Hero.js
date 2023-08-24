import React from 'react';
import heroImage from '../../assets/hero.png';

const Hero = () => {
  return (
    <div className='flex w-full overflow-hidden'>
        <div className='flex flex-col gap-5' >
         <header className='font-mono font-bold text-7xl'>CLOTHES MAKE THE MAN</header>
         <p>Choose the dress style that best suits you with our diverse clothing collection</p>
         <div>
          <button>
            Shop Now
          </button>
         </div>
        </div>
      <img src={heroImage} alt="Hero Image"
      className='w-full sm:w-2/3 md:1/2 lg:w-1/3 h-auto'
      />
    </div>
  )
}

export default Hero;
