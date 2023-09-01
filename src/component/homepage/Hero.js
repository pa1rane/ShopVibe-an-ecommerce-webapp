import React from 'react';
import modelImage from '../../assets/model.png';
import {Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='flex w-full min-h-[90vh] overflow-hidden justify-center bg-[#4E148C]'>
        <div className='flex flex-col gap-5 items-center justify-center' >
         <header className='font-mono font-bold text-7xl text-center text-[#ffff]'>CLOTHES MAKE THE MAN</header>
         <p className='font-semibold font-sans text-md text-[#ffff]'>Choose the dress style that best suits you with our diverse clothing collection</p>
         <div>
        <Link to="/products"> 
        <button className='bg-[#ffff] font-bold py-2 px-4 rounded-full font-mono text-[#4E148C] hover:bg-[#20a2b6] transition-colors'>
            Shop Now
          </button>
          </Link>
         </div>
        </div>
      <img src={modelImage} alt="Model Image"
      className='w-full sm:w-2/3 md:1/2 lg:w-1/4 lg:h-[500px] h-auto'
      />
    </div>
  )
}

export default Hero;