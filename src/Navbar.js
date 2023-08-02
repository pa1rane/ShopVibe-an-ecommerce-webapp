import React from 'react';
import {BsFillBookmarkHeartFill} from 'react-icons/bs';
import {BsCartCheckFill} from 'react-icons/bs';
import {BiSolidUserCircle} from 'react-icons/bi';

const Navbar = () => {
  return (
    <>
    <div className='w-full  h-10 flex items-center justify-between' >
      <div className="flex gap-20">
      <h3 className='ml-10 hover:cursor-pointer'>ShopVibe</h3>
      <ul className='flex gap-10'>
       <li className='hover:cursor-pointer'>Home</li>
       <li className='hover:cursor-pointer'>About</li>
       <li className='hover:cursor-pointer'>Products</li>
      </ul>
      </div>

      <div className="right">
      <div className="flex items-center mr-10 gap-10 className='hover:cursor-pointer'">
       <BsFillBookmarkHeartFill className='hover:cursor-pointer w-6 h-6'/>
       <BsCartCheckFill className='hover:cursor-pointer w-6 h-6'/>
       <BiSolidUserCircle className='hover:cursor-pointer w-7 h-7'/>
      </div>
      </div>
      </div>
    </>
  )
}

export default Navbar
