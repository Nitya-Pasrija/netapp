import React from 'react';
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          GET STARTED WITH THE FREELANCING WORLD
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
        Indian Freelance Platform
        </h1>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Cause 9-5 is too mainstream for us!</p>
        <NavLink className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black no-underline' to="/gigs">View Gigs</NavLink>
      </div>
    </div>
  );
};

export default Hero;
