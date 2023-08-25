import React from 'react';
import heroImage from '../../assets/hero.png';
import {Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='flex w-full overflow-hidden justify-center bg-[#EADBC8] '>
        <div className='flex flex-col gap-5 items-center justify-center' >
         <header className='font-mono font-bold text-7xl text-center'>CLOTHES MAKE THE MAN</header>
         <p className='font-semibold font-sans text-md'>Choose the dress style that best suits you with our diverse clothing collection</p>
         <div>
        <Link to="/products"> <button className='bg-black py-2 px-4 rounded-full font-mono text-white'>
            Shop Now
          </button>
          </Link>
         </div>
        </div>
      <img src={heroImage} alt="Hero Image"
      className='w-full sm:w-2/3 md:1/2 lg:w-1/4 lg:h-[600px] h-auto'
      />
    </div>
  )
}

export default Hero;